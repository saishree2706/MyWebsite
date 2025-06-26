import React, { createContext, useState, useEffect, useContext } from "react";

const BlogContext = createContext<any>(null);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const [categories, setCategories] = useState<string[]>([]); 
const [tags, setTags] = useState<string[]>([]);   

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/get-posts');
      const json = await res.json();

      if (json.posts) {
        setPosts(json.posts);
        setCategories(json.categories || []);
        setTags(json.tags || []);
      } else {
        console.error('Invalid data:', json);
      }
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (posts.length === 0) fetchPosts();
  else setLoading(false);
}, []);


  return (
    <BlogContext.Provider value={{ posts, setPosts, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
