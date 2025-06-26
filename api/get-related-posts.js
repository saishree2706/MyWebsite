import { MongoClient } from "mongodb";
import 'dotenv/config';
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  const { slug, category } = req.query;

  try {
    await client.connect();
    const db = client.db("blogDB");
    const posts = await db.collection("posts")
      .find({ category, slug: { $ne: slug } })
      .limit(3)
      .toArray();
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
    await client.close();
  }
}
