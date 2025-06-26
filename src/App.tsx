import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Story from './pages/Story';
import WelcomeModal from './components/WelcomeModal';
import { BlogProvider } from './pages/BlogContext';
import ScrollToTop from './subComponents/ScrollToTop';
import CustomToaster from './subComponents/CustomToaster';

function App() {
  return (
    <BlogProvider>
<ThemeProvider>
  <CustomToaster />
      <Router>
<ScrollToTop />

        {/* <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300"> */}
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-200 dark:from-gray-800 dark:via-sky-950 dark:to-gray-900 transition-colors duration-300">
          <WelcomeModal />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/story" element={<Story />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
    </BlogProvider>
    
  );
}

export default App;