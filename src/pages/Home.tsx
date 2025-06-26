import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Camera,
  Code,
  BookOpen,
  Heart,
  Globe,
  Mountain,
  Coffee,
  Bike,
} from "lucide-react";
import FeaturedProjects from "../subComponents/FeaturedProjects";
import ImageCarousel from "../subComponents/ImageCarousel";
import { Typewriter } from "react-simple-typewriter";

const Home: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-sky-300/20 to-pink-100/20 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-blue-900/20"></div>
        <div className="relative text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Welcome {userData.name ? userData.name : 'Explorer'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              to My World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A frustrated and confused software engineer still figuring out life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/story"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
            >
              <span>Read My Story</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              About Me
            </Link>
          </div>
        </div>
      </section> */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle animated gradient blob background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-sky-300 opacity-20 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-sky-300/20 to-pink-100/20 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-blue-900/20" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-up">
            <span className="block">
              Welcome{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md">
                {userData.name ? userData.name : "Explorer"}
              </span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-sky-500 to-indigo-500 mt-2 tracking-tight">
              to My World
            </span>
          </h1>

          {/* <p
      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in transition-opacity duration-1000"
      style={{ animationDelay: "0.3s" }}
    >
      A frustrated and confused software engineer still figuring out life.
    </p> */}
<div
  className="mx-auto mb-8 text-center text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in transition-opacity duration-1000 w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl"
>
  <Typewriter
    words={[
      "A software engineer trying to make sense of life.",
      "Sometimes I write code. Sometimes I write bugs.",
      "Still figuring things out, one line at a time.",
    ]}
    loop={true}
    cursor
    cursorStyle="_"
    typeSpeed={60}
    deleteSpeed={20}
    delaySpeed={2000}
  />
</div>



          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="/story"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Read My Story</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Travel Adventures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Escaping the reality to feel the beauty of one destination at a
              time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {[
              {
                title: 'Mountain Peaks',
                location: 'Swiss Alps',
                image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Conquering heights and finding peace in the clouds'
              },
              {
                title: 'Ocean Waves',
                location: 'Maldives',
                image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Crystal clear waters and endless horizons'
              },
              {
                title: 'City Lights',
                location: 'Tokyo',
                image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Urban adventures in the land of the rising sun'
              }
            ].map((place, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center text-white">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{place.location}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{place.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{place.description}</p>
                  </div>
                </div>
              </div>
            ))} */}
            <ImageCarousel
              title="Mountain Peaks"
              location="India"
              description="Conquering heights and finding peace in the clouds"
              images={[
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750926852/20250416_103138_q61grm.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750926728/20231216_075943_jtng6e.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927014/20250416_171141_avkeyt.jpg",
              ]}
              delay={1000}
            />
            <ImageCarousel
              title="Ocean Waves"
              location="India"
              description="Finding Peace in the Calmness of the sea and the sound of waves"
              images={[
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750926168/IMG_20230513_052919_j1gpaf.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750926086/IMG_20230716_082056_jqmrsd.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927012/20250416_173802_bgc2dl.jpg",
              ]}
              delay={1200}
            />
            <ImageCarousel
              title="Nature Trails"
              location="India"
              description="Exploring the serene beauty of nature and its hidden trails"
              images={[
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927237/20250302_064550_hvkgbb.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927238/20250309_065320_r8mq8m.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927235/20250331_071947_sjqteh.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927232/IMG_20230409_062349_HDR_cn1uoi.jpg",
                "https://res.cloudinary.com/dpgh7iphl/image/upload/v1750927230/20231113_064928_rvxkzw.jpg",
              ]}
              delay={2000}
            />
          </div>
        </div>
      </section>

      {/* <FeaturedProjects/> */}

      {/* Blog Preview Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Thoughts on travel, tech, and life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Art of Slow Travel',
                excerpt: 'Why rushing through destinations made me miss the beauty of the journey itself.',
                date: '2 days ago',
                readTime: '5 min read',
                category: 'Travel',
                slug: 'the-art-of-slow-travel'
              },
              {
                title: 'Building with Purpose',
                excerpt: 'How I learned to create technology that serves people, not the other way around.',
                date: '1 week ago',
                readTime: '8 min read',
                category: 'Tech',
                slug: 'building-sustainable-tech'
              },
              {
                title: 'Finding Balance',
                excerpt: 'Lessons from living between wanderlust and the comfort of home.',
                date: '2 weeks ago',
                readTime: '6 min read',
                category: 'Life',
                slug: 'digital-nomad-myth'
              }
            ].map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              <BookOpen className="w-5 h-5" />
              <span>View All Posts</span>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Personal Touch Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            A Little About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Bike className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Bike Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                I believe the best way to find happiness is biking
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                I love turning complex challenges into elegant solutions
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                People Person
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Every person has a story worth hearing and sharing
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <span>Learn More About Me</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
