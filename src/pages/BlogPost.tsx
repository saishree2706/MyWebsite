// BlogPost.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useBlogContext } from './BlogContext';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import CommentSuccessDialog from '../subComponents/CommentSuccessDialog';


const loadingMessages = [
  "Turning the page...",
  "Warming up the content...",
  "Gathering thoughts...",
  "Spilling the digital ink...",
  "Writing history, one byte at a time..."
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useBlogContext();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string>("");
const [comments, setComments] = useState<any[]>([]);
const [name, setName] = useState('');
const [comment, setComment] = useState('');
const [submitting, setSubmitting] = useState(false);
const [dialogOpen, setDialogOpen] = useState(false);

const commentsCache = useRef<{ [slug: string]: any[] }>({});



// useEffect(() => {
//   const fetchComments = async () => {
//     try {
//       const res = await fetch(`/api/comments?slug=${slug}`);
//       const data = await res.json();
//       setComments(data);
//     } catch (err) {
//       console.error('Error loading comments:', err);
//     }
//   };
//   if (slug) fetchComments();
// }, [slug]);

useEffect(() => {
  const fetchComments = async () => {
    if (commentsCache.current[slug]) {
      setComments(commentsCache.current[slug]); // ✅ use cache
      return;
    }

    try {
      const res = await fetch(`/api/comments?slug=${slug}`);
      const data = await res.json();
      setComments(data);
      commentsCache.current[slug] = data; // ✅ cache it
    } catch (err) {
      console.error('Error loading comments:', err);
    }
  };

  if (slug) fetchComments();
}, [slug]);


  const fetchRelatedPosts = async (slug: string, category: string) => {
    try {
      const relRes = await fetch(`/api/get-related-posts?slug=${slug}&category=${category}`);
      const relData = await relRes.json();
      setRelatedPosts(relData);
    } catch (err) {
      console.error("Error fetching related posts:", err);
    }
  };

  useEffect(() => {
    const cached = posts.find((p) => p.slug === slug);
    if (cached) {
      setPost(cached);
      setLoading(false);
      fetchRelatedPosts(cached.slug, cached.category);
      return;
    }

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/get-post?slug=${slug}`);
        const data = await res.json();
        setPost(data);
        fetchRelatedPosts(data.slug, data.category);
      } catch (err) {
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    setMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    fetchPost();
  }, [slug, posts]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center px-4 animate-pulse">
        <div className="text-4xl font-bold mb-4 text-blue-600">{message}</div>
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6 space-x-6">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author.name}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8" />

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs"
              >
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
<section className="mt-16">
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Leave a Comment</h3>

  <form
    onSubmit={async (e) => {
  e.preventDefault();
  setSubmitting(true);
  try {
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, name, comment })
    });

    setName('');
    setComment('');
    const res = await fetch(`/api/comments?slug=${slug}`);
    const data = await res.json();
    commentsCache.current[slug] = data;
    setComments(data);
    setDialogOpen(true); // ✅ open success dialog
  } catch (err) {
    alert('Failed to post comment');
    console.log(err);
  } finally {
    setSubmitting(false);
  }
}}

    className="mb-8 space-y-4"
  >
    <input
      required
      type="text"
      placeholder="Your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
    />
    <textarea
      required
      placeholder="Your comment"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      rows={4}
      className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
    ></textarea>
    <button
      type="submit"
      disabled={submitting}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      {submitting ? 'Posting...' : 'Post Comment'}
    </button>
  </form>

  <h4 className="text-xl font-semibold mb-4">Comments</h4>
  <div className="space-y-4">
    {comments.map((c) => (
      <div key={c._id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
        <div className="text-sm text-gray-700 dark:text-gray-300 mb-1 font-semibold">{c.name}</div>
        <p className="text-gray-800 dark:text-gray-200">{c.comment}</p>
        <div className="text-xs text-gray-500 mt-2">
          {new Date(c.createdAt).toLocaleString()}
        </div>
      </div>
    ))}
    {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
  </div>
</section>

      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post._id || post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <CommentSuccessDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />

    </div>
  );
};

export default BlogPost;
