import React from 'react';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />,
      title: "500+ Members",
      description: "Join our growing community of tech enthusiasts",
      link: "/about"
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />,
      title: "50+ Events",
      description: "Annual workshops, hackathons, and tech talks",
      link: "/events"
    },
    {
      icon: <Award className="h-8 w-8 text-pink-600 dark:text-pink-400 mb-4" />,
      title: "#1 Tech Club",
      description: "Recognized as the leading technical society at VIT Chennai",
      link: "/about"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 0.9, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-40 left-40 w-80 h-80 bg-pink-400/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Join the Future
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">of Computing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Be part of VIT Chennai's premier tech community. Learn, grow, and innovate with fellow tech enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/join"
                className="group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Join ACM
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                className={`glassmorphism p-6 rounded-2xl cursor-pointer transform hover:scale-105 transition-transform ${
                  index === 2 ? 'col-span-2' : ''
                }`}
                onClick={() => navigate(stat.link)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{stat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;