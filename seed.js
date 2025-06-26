// seed.js
import { MongoClient } from 'mongodb';
import 'dotenv/config';
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI);

const blogPosts = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    excerpt: "This is a short summary of my first blog post.",
    category: "Tech",
    tags: ["React", "MongoDB"],
    date: new Date("2024-06-10"),
    readTime: "4 min read",
    content: "## Introduction\n\nThis is the **first** blog post in markdown-like format.\n\n- **Topic**: React Basics\n- **Tools**: Vite, Tailwind",
    image: "https://via.placeholder.com/800x400",
    author: {
      name: "Saishree",
      avatar: "https://via.placeholder.com/80"
    }
  },
  {
    slug: "second-post",
    title: "Understanding Serverless",
    excerpt: "An intro to serverless APIs and how they help React apps scale.",
    category: "Tech",
    tags: ["Serverless", "API"],
    date: new Date("2024-06-15"),
    readTime: "6 min read",
    content: "## Serverless APIs\n\nServerless removes infrastructure headaches.\n\n- **Provider**: Vercel\n- **Database**: MongoDB Atlas",
    image: "https://via.placeholder.com/800x400",
    author: {
      name: "Saishree",
      avatar: "https://via.placeholder.com/80"
    }
  }
];

async function seed() {
  try {
    await client.connect();
    const db = client.db("blogDB");
    const posts = db.collection("posts");

    await posts.deleteMany({});
    await posts.insertMany(blogPosts);
    console.log("✅ Seeded blog posts!");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await client.close();
  }
}

seed();
