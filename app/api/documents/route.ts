'use server';
// Import the generated Prisma client

import fs from "fs"
import { Pinecone } from '@pinecone-database/pinecone'
import { NextRequest, NextResponse } from "next/server"
import { initPinecone } from "@/utils/pinecone-client"
import { createClient } from "@supabase/supabase-js"
import axios from "axios"
import { PDFLoader } from "langchain/document_loaders/fs/pdf"
import { OpenAIEmbeddings } from "langchain/embeddings/openai"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { PineconeStore } from "@langchain/pinecone"
import { createPrisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      openaiApiKey,
      supabaseBucket,
      pineconeEnvironment,
      supabaseUrl,
      supabaseKey,
      pineconeIndex,
      pineconeApiKey,
      supabaseDatabaseUrl,
    } = body

    const prisma = createPrisma({ url: supabaseDatabaseUrl })
    const supabase = createClient(supabaseUrl, supabaseKey)
    const pineconeResponse = await initPinecone(pineconeApiKey).catch(
      (error) => {
        console.error("PINECONE", error);
        return NextResponse.json({ error: "PINECONE" }, { status: 500 });
      }
    );
    
    if (pineconeResponse instanceof NextResponse) {
      return pineconeResponse;
    }
    
    const pinecone = pineconeResponse;

    const data = await prisma.documents.create({
      data: {
        url: body?.url,
        // @ts-ignore
        name: body?.name,
      },
    })

    const {
      data: { publicUrl },
    }: any = supabase.storage.from(supabaseBucket).getPublicUrl(body.url)

    const res = await axios.get(publicUrl, { responseType: "arraybuffer" })

    // Write the PDF to a temporary file. This is necessary because the PDFLoader
    fs.writeFileSync(`/temp/${data.id}.pdf`, res.data)
    const loader = new PDFLoader(`/temp/${data.id}.pdf`)

    const rawDocs = await loader.load()


    if (!Array.isArray(rawDocs)) {
      throw new Error("Expected an array of documents from PDFLoader");
    }


    /* Split text into chunks */
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1536,
      chunkOverlap: 200,
    })

    const docs = await textSplitter.splitDocuments(rawDocs)

    console.log(docs);


    if (!Array.isArray(docs) || docs.length === 0) {
      throw new Error("No documents to process");
    }


    console.log("creating vector store...")
    /*create and store the embeddings in the vectorStore*/
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: openaiApiKey,
      stripNewLines: true,
      verbose: true,
      timeout: 60000,
      maxConcurrency: 5,
    })

    console.log(embeddings)

    const index = pinecone.index(pineconeIndex) //change to your own index name
    // pinecone_name_space is the id of the document
    //embed the PDF documents
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      namespace: data.id,
      textKey: "text",
    })


    console.log("STEP 4")
    

    return NextResponse.json({ data })
  } catch (error) {
    console.error("Error in POST handler:", error instanceof Error ? error.message : error)
    return NextResponse.json({ error: error }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get credentials from cookies
    const credentials = JSON.parse(request.cookies.get('credentials')?.value || null)
    if (!credentials) {
      return NextResponse.json({ data: [] })
    }

    const { supabaseDatabaseUrl } = credentials
    const prisma = createPrisma({ url: supabaseDatabaseUrl })
    const data = await prisma.documents.findMany({
      orderBy: {
        created_at: 'desc',
      },
    })
    return NextResponse.json({ data })
  } catch (error) {
    console.error("Error in GET handler:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
