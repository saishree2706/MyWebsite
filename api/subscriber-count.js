// api/subscriber-count.ts
// import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection('newsletterSubscribers');

    const count = await collection.estimatedDocumentCount();
    return res.status(200).json({ count });
  } catch (err) {
    console.error('[subscriber-count] DB error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
