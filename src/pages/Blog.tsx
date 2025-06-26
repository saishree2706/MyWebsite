// Blog.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import ContentLoader from 'react-content-loader';
import { useBlogContext } from './BlogContext';

const BlogShimmer = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <ContentLoader
        key={i}
        height={300}
        width={400}
        speed={2}
        backgroundColor="#e0e0e0"
        foregroundColor="#c0c0c0"
      >
        <rect x="0" y="0" rx="10" ry="10" width="400" height="200" />
        <rect x="0" y="210" rx="4" ry="4" width="300" height="20" />
        <rect x="0" y="240" rx="3" ry="3" width="250" height="15" />
      </ContentLoader>
    ))}
  </div>
);

// const Blog: React.FC = () => {
//   const { posts, categories, tags, loading } = useBlogContext();
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredPosts = posts.filter((post) => {
//     const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
//     const matchSearch =
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchCat && matchSearch;
//   });

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   return (
//     <div className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog</h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Thoughts on travel, technology, life, and everything in between.
//           </p>
//         </div>

//         {/* Search and Filter */}
//         <div className="mb-12">
//           <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search posts..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg"
//               />
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {["All", ...(categories || [])].map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
//                     selectedCategory === category
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {loading ? (
//           <BlogShimmer />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPosts.map((post) => (
//               <Link key={post._id || post.slug} to={`/blog/${post.slug}`} className="group cursor-pointer">
//                 <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
//                       <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
//                       <span>{post.author.name}</span>
//                     </div>
//                     <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 space-x-4">
//                       <div className="flex items-center">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         <span>{formatDate(post.date)}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Clock className="w-4 h-4 mr-1" />
//                         <span>{post.readTime}</span>
//                       </div>
//                     </div>
//                     <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
//                       {post.title}
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
//                       {post.excerpt}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {post.tags.slice(0, 3).map((tag: string) => (
//                         <span key={tag} className="flex items-center px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">
//                           <Tag className="w-3 h-3 mr-1" />
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
//                       <span className="text-sm font-medium">Read More</span>
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

const Blog: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=compress&cs=tinysrgb&h=1080&w=1920"
        alt="Open book background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-pulse drop-shadow-lg">
          Coming Soon...
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          We’re crafting something amazing for you — stay tuned for inspiring stories and beautiful ideas 📖✨
        </p>
      </div>
    </div>
  );
};

export default Blog;
