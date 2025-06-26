import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db('blogDB');

    const posts = await db.collection('posts').find().toArray();
    const categories = [...new Set(posts.map(post => post.category))];
    const tags = [...new Set(posts.flatMap(post => post.tags || []))];

    res.status(200).json({ posts, categories, tags });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
}
