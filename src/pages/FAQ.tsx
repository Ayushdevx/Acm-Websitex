import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import FAQSection from '../components/faq/FAQSection';
import { FAQ } from '../types';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'What is ACM VIT Chennai?',
      answer: 'ACM VIT Chennai is a student chapter of the Association for Computing Machinery, the world\'s largest computing society. We focus on fostering technical knowledge, professional development, and innovation among students.',
      category: 'general',
    },
    {
      question: 'How can I join ACM VIT Chennai?',
      answer: 'You can join by filling out the detailed application form on our website. We review applications based on your technical skills, enthusiasm, and commitment to learning. The selection process includes reviewing your application and potentially an interview.',
      category: 'membership',
    },
    {
      question: 'What are the membership benefits?',
      answer: 'ACM membership provides access to exclusive workshops, hackathons, networking opportunities, mentorship programs, industry connections, and leadership opportunities. Members also get priority registration for events and can participate in special interest groups.',
      category: 'membership',
    },
    {
      question: 'What types of events does ACM organize?',
      answer: 'We organize various events including technical workshops, coding competitions, hackathons, tech talks by industry experts, project showcases, and networking sessions. We also conduct regular study groups and mentorship programs.',
      category: 'events',
    },
    {
      question: 'Are there any membership fees?',
      answer: 'Yes, there is a nominal annual membership fee that covers event materials, workshop resources, and chapter activities. The exact amount will be communicated during the selection process.',
      category: 'membership',
    },
    {
      question: 'What technical skills do I need to join?',
      answer: 'While prior technical skills are beneficial, we welcome students with a strong desire to learn and grow. Basic programming knowledge and enthusiasm for technology are important. We have different departments catering to various skill levels and interests.',
      category: 'technical',
    },
    {
      question: 'Can first-year students join?',
      answer: 'Yes, first-year students are encouraged to join! We have special mentorship programs and beginner-friendly events to help you get started in your technical journey.',
      category: 'membership',
    },
    {
      question: 'How can I contribute to ACM?',
      answer: 'Members can contribute by organizing events, leading projects, mentoring juniors, creating technical content, and participating in community initiatives. We encourage active participation and leadership.',
      category: 'general',
    },
    {
      question: 'What projects can I work on?',
      answer: 'Members can work on various projects including web/app development, AI/ML, cybersecurity, and more. We also collaborate with industry partners on real-world projects and encourage innovative solutions.',
      category: 'technical',
    },
    {
      question: 'How much time commitment is required?',
      answer: 'The time commitment varies based on your role and involvement level. Regular members typically spend 3-5 hours per week on ACM activities. Leadership positions may require more time.',
      category: 'membership',
    },
  ];

  const categories = ['all', 'general', 'membership', 'events', 'technical'];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about ACM VIT Chennai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                    icon={<Filter className="h-4 w-4" />}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredFaqs.length > 0 ? (
            <FAQSection
              faqs={filteredFaqs}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;