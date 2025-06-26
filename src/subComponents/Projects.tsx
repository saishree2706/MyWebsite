import React from 'react';
import { GraduationCap, Code, Heart, X, MapPin, Calendar, Award } from 'lucide-react';

const Projects = () => {
  return (
  <>
  <section className="mb-20">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-purple-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Wanderlust - Travel Planning App',
                description: 'A comprehensive travel planning platform that helps users discover destinations, plan itineraries, and connect with fellow travelers.',
                tech: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
                impact: '50K+ downloads, 4.8★ rating',
                link: '#'
              },
              {
                title: 'EcoTrack - Sustainability Monitor',
                description: 'An IoT-powered application that helps businesses track and reduce their environmental footprint through real-time monitoring.',
                tech: ['Vue.js', 'Python', 'PostgreSQL', 'IoT Sensors'],
                impact: 'Used by 200+ companies',
                link: '#'
              },
              {
                title: 'StoryShare - Digital Storytelling Platform',
                description: 'A platform where travelers and creators can share immersive stories through multimedia content and interactive maps.',
                tech: ['React', 'Express.js', 'WebGL', 'AWS'],
                impact: '1M+ stories shared',
                link: '#'
              },
              {
                title: 'MindfulCode - Developer Wellness',
                description: 'A VS Code extension that promotes healthy coding habits by tracking work patterns and suggesting breaks.',
                tech: ['TypeScript', 'VS Code API', 'Machine Learning'],
                impact: '100K+ installs',
                link: '#'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 dark:text-green-400 text-sm font-medium">{project.impact}</span>
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </section>
  </>
    
  )
}

export default Projects