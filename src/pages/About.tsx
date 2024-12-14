import React from 'react';
import { Users, Award, Target } from 'lucide-react';
import Card from '../components/shared/Card';
import TeamMemberCard from '../components/about/TeamMemberCard';
import { TeamMember } from '../types';

const About = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Ayush Upadhyay',
      role: 'Chairperson',
      image: 'https://media.licdn.com/dms/image/D4D03AQGfUQH0g7YNTA/profile-displayphoto-shrink_800_800/0/1705941700788?e=1739318400&v=beta&t=Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0',
      linkedin: 'https://linkedin.com/in/ayushdevai',
      github: 'https://github.com/ayushdevai',
    },
    // Add more team members here
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About ACM VIT Chennai
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a community of tech enthusiasts dedicated to fostering growth,
            innovation, and excellence in computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="dark:bg-gray-800">
            <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower students with technical knowledge and professional skills
              through hands-on learning experiences.
            </p>
          </Card>
          <Card className="dark:bg-gray-800">
            <Target className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading technical society that shapes the future of
              technology and innovation.
            </p>
          </Card>
          <Card className="dark:bg-gray-800">
            <Award className="h-8 w-8 text-pink-600 dark:text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Innovation, collaboration, inclusivity, and continuous learning drive
              everything we do.
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;