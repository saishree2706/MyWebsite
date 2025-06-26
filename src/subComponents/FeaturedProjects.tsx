import React from 'react'
import { ArrowRight, MapPin, Camera, Code, BookOpen, Heart, Globe, Mountain, Coffee } from 'lucide-react';

const FeaturedProjects = () => {
  return (

    <>
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Building digital experiences that matter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Travel Companion App',
                tech: 'React Native, Node.js',
                description: 'A mobile app to help fellow travelers discover hidden gems and connect with locals.',
                icon: Globe,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Mountain Weather Tracker',
                tech: 'Vue.js, Python',
                description: 'Real-time weather monitoring for mountaineers and outdoor enthusiasts.',
                icon: Mountain,
                color: 'from-green-500 to-teal-500'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mb-6`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{project.tech}</p>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default FeaturedProjects