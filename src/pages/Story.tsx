import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Mail, Heart, BookOpen, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import playSound from '../utils/playSound'; 
import SubscribeStats from '../subComponents/SubscribeStats';

playSound('success'); // 🔔 success.mp3
playSound('error');   // ❌ error.mp3

const Story: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
const [isEmailValid, setIsEmailValid] = useState(true);
const [isSubmitting, setIsSubmitting] = useState(false);

  const storyPages = [
    {
      title: "Brain is not Braining",
      content: "As always, I'm confused on what to write. It is still cooking... Subscribe to get notified if Iam able write it "
    }
  ]

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateEmail(email)) {
    setIsEmailValid(false);
    toast.error("Please enter a valid email.");
    playSound('error'); // Play error sound
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch('/api/subscribe-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'story_page' })
    });

    const data = await res.json();

    if (res.ok) {
      setIsSubscribed(true);
      window.dispatchEvent(new CustomEvent('subscriber::increment', { detail: 1 }));
      toast.success("🎉 Successfully subscribed!");
      playSound('success'); // Play success sound
    } else {
      toast.error(data.error || "Something went wrong. Please try again.");
      playSound('error'); // Play error sound
    }
  } catch (err) {
    toast.error("Network error. Please try again.");
    playSound('error'); // Play error sound
    console.log("Subscription error:", err);
  } finally {
    setIsSubmitting(false);
    setIsEmailValid(true);
  }
};


const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const emailID = e.target.value;
      setEmail(emailID);
      setIsEmailValid(isValidEmail(emailID));
      
    };
  const nextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Journey</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The story of how I left everything behind to discover who I was meant to be
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Chapter {currentPage + 1} of {storyPages.length}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(((currentPage + 1) / storyPages.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentPage + 1) / storyPages.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Story Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {storyPages[currentPage].title}
          </h2>
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            {storyPages[currentPage].content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentPage === 0
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {storyPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? 'bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === storyPages.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentPage === storyPages.length - 1
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Newsletter Signup (only show on last page) */}
        {currentPage === storyPages.length - 1 && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Still Want to read the story?</h3>
            </div>
            
            {isSubscribed ? (
              <div className="py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Thank you for subscribing!</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I'll keep you updated with a real story where you can read what not to do.
                </p>
                <SubscribeStats />
              </div>
            ) : (
              <>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  It's just some raw and NON-AI, purely Human content. If you still want to read the story, pshare your email ID and get notified if I write someday 😂
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    // className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    className={`flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          isEmailValid
                            ? "border-gray-300 dark:border-gray-600"
                            : "border-red-500"
                        } rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 ${
                          isEmailValid
                            ? "focus:ring-blue-500"
                            : "focus:ring-red-500"
                        } focus:border-transparent`}
                  />
                  <button 
                    type="submit"
                    disabled={!validateEmail(email) || isSubmitting}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Yay! Joining...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </form>
                <SubscribeStats />

              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Story;