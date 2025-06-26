import { MongoClient } from "mongodb";
import 'dotenv/config';
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    await client.connect();
    const db = client.db("blogDB");
    const post = await db.collection("posts").findOne({ slug });
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
    await client.close();
  }
}
