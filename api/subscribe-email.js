// api/subscribe-email.ts
// import { VercelRequest, VercelResponse } from '@vercel/node'; // Not needed in JS
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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source } = req.body;

  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection('newsletterSubscribers');

    const existing = await collection.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: 'Already subscribed' });
    }

    await collection.insertOne({
      email,
      source: source || 'unknown',
      subscribedAt: new Date().toISOString(),
    });

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error('MongoDB error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
