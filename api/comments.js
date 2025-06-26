import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db('blogDB');
    const comments = db.collection('comments');

    if (req.method === 'GET') {
      const { slug } = req.query;
      const result = await comments
        .find({ slug })
        .sort({ createdAt: -1 })
        .toArray();
      res.status(200).json(result);
    }

    else if (req.method === 'POST') {
      const { slug, name, comment } = req.body;
      if (!slug || !name || !comment) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      const result = await comments.insertOne({
        slug,
        name,
        comment,
        createdAt: new Date()
      });
      res.status(201).json(result);
    }

    else {
      res.status(405).json({ error: 'Method not allowed' });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
}
