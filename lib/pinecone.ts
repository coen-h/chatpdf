import { initPinecone } from "@/utils/pinecone-client"

type CreatePineconeIndexArgs = {
  pineconeApiKey: string
  pineconeEnvironment?: string
  pineconeIndexName: string
}

export const createPineconeIndex = async ({
  pineconeApiKey,
  pineconeEnvironment = "us-east-1-gcp",
  pineconeIndexName,
}: CreatePineconeIndexArgs) => {
  const pinecone = await initPinecone(pineconeApiKey);

  return pinecone.Index(pineconeIndexName)
}
