import React from 'react';
import { Heart, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">The Confused Soul</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Welcome to my personal space where I share my journey, experiences, and thoughts. 
              Join me as I explore the world through travel, technology, and storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About Me</a></li>
              <li><a href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>01.confused.soul@gmailcom</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Telangana, 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center">
  Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> by TheConfusedSoul © {new Date().getFullYear()}
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;