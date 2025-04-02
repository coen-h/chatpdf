import { Pinecone } from '@pinecone-database/pinecone';

if (!process.env.PINECONE_API_KEY) {
  throw new Error('Pinecone environment or api key vars missing');
}

export async function initPinecone(apiKey: string) {
  try {
    console.log(apiKey);
    const pineconeRes = new Pinecone({ apiKey: apiKey });
    return pineconeRes;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}