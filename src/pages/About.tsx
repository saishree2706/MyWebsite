import React from 'react';
import { GraduationCap, Code, Heart, X, MapPin, Calendar, Award } from 'lucide-react';
import Projects from '../subComponents/Projects';

const About: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Confused Software Engineer, perfect in executing my travel plans with no itenerary.
          </p>
        </div>

        {/* Personal Photo and Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dpgh7iphl/image/upload/v1750925510/WhatsApp_Image_2025-01-30_at_17.19.07_02f18db3_mm7ql5.jpg"
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hello {userData.name ? userData.name : 'Explorer'}, I'm Sai</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a full-stack developer with a passion for creating digital experiences that matter. 
              When I'm not coding, you'll find me exploring new destinations, capturing moments through 
              photography, or sharing stories that inspire others to chase their dreams.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey began with a simple curiosity about how things work, which led me into the 
              world of technology. I generally do not prefer coding unless AI is unable to solve the problem,
              but when I do, I strive to write clean, efficient code that not only solves problems but also enhances user experiences. 
              
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Based in Karimnagar, Telangana</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>3+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-blue-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science & Engineering</h3>
                <span className="text-blue-500">2018 - 2022</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">RGUKT, Basar</p>
              <p className="text-gray-500 dark:text-gray-400">Tech Fest, Sports Elite</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <Projects/> */}

        {/* Likes and Dislikes */}
        <section>
          <div className="flex items-center mb-8">
            <Heart className="w-8 h-8 text-red-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Likes & Dislikes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Likes */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Heart className="w-6 h-6 text-green-500 mr-3" />
                Things I Love
              </h3>
              <ul className="space-y-3">
                {[
                  'Mountain hiking at sunrise',
                  'Bike rides through scenic routes',
                  'Clean, well-documented code',
                  'Overthinking and worrying about everything',
                  'Solving complex technical challenges',
                  'Photography and visual storytelling',
                  'Binge-watching south Indian movies',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Heart className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dislikes */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <X className="w-6 h-6 text-red-500 mr-3" />
                Not My Cup of Tea
              </h3>
              <ul className="space-y-3">
                {[
                  'Rushed travel itineraries',
                  'Overcrowded tourist traps',
                  'Technical debt and legacy code',
                  'Long meetings and Social gatherings',
                  'Fast fashion and wasteful consumption',
                  'Negative attitudes and closed minds',
                  'Technologies used without purpose'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;