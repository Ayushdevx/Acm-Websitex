import React, { useState } from 'react';
import { Users, Award, Target, Linkedin, Github, MousePointer } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/shared/Card';
import TeamMemberCard from '../components/about/TeamMemberCard';
import { TeamMember } from '../types';

const About = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Ayush Upadhyay',
      role: 'Developer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFgVZrPnKX2yg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714299394862?e=1739404800&v=beta&t=NsgFTs4XUU9J09PCkCcNpt2J4K9wdHKev8nkPiOFQ4w',
      linkedin: 'https://www.linkedin.com/in/ayushdevai/',
      github: 'https://github.com/Ayushdevx',
    },
    {
      id: '2',
      name: 'Subbulakshmi T',
      role: 'Faculty Coordinator',
      image: 'https://chennai.vit.ac.in/wp-content/uploads/2020/08/50569.jpg', // Replace with actual image path
      linkedin: '', // Add LinkedIn if available
      github: '', // Add GitHub if available
    },
    // Add more team members here
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05,
      rotate: 2,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12 bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            ACM VIT Chennai
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-pulse">
            Innovating Tomorrow, One Line of Code at a Time
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: Users,
              title: "Our Mission",
              color: "blue",
              description: "To empower students with technical knowledge and professional skills through hands-on learning experiences.",
              key: "mission"
            },
            {
              icon: Target,
              title: "Our Vision",
              color: "purple",
              description: "To be the leading technical society that shapes the future of technology and innovation.",
              key: "vision"
            },
            {
              icon: Award,
              title: "Our Values",
              color: "pink",
              description: "Innovation, collaboration, inclusivity, and continuous learning drive everything we do.",
              key: "values"
            }
          ].map(({ icon: Icon, title, color, description, key }) => (
            <motion.div 
              key={key}
              variants={cardHoverVariants}
              whileHover="hover"
              initial="rest"
              onHoverStart={() => setActiveSection(key)}
              onHoverEnd={() => setActiveSection(null)}
              className={`relative group cursor-pointer dark:bg-gray-800 bg-white shadow-lg rounded-xl p-6 transform transition-all duration-300 
                ${activeSection === key ? `ring-4 ring-${color}-500 dark:ring-${color}-400` : ''}`}
            >
              <Icon className={`h-10 w-10 text-${color}-600 dark:text-${color}-400 mb-4 transition-all`} />
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
              {activeSection === key && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-2 right-2 text-gray-400"
                >
                  <MousePointer className="h-5 w-5" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Our Extraordinary Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardHoverVariants}
                whileHover="hover"
                initial="rest"
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;