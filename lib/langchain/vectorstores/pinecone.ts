// langchain/pinecone.ts
import { initPinecone } from "@/utils/pinecone-client"
import { PineconeStore } from "@langchain/pinecone"
import { OpenAIEmbeddings } from "langchain/embeddings/openai"
import { PINECONE_NAME_SPACE } from "@/config/pinecone"

export async function getPineconeStore(credentials, id) {
  const { openaiApiKey, pineconeIndex, pineconeApiKey } = credentials
  const pinecone = await initPinecone(pineconeApiKey)
  const index = pinecone.Index(pineconeIndex)

  /* create vectorstore*/
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({ openAIApiKey: openaiApiKey, }),
    {
      pineconeIndex: index,
      textKey: "text",
      namespace: id || PINECONE_NAME_SPACE,
    }
  )

  return vectorStore
}