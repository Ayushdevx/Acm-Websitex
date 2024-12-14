import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  X, 
  HelpCircle, 
  Star, 
  Zap 
} from 'lucide-react';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is ACM VIT Chennai?',
      answer: 'ACM VIT Chennai is a student chapter of the Association for Computing Machinery, the world\'s largest computing society. We focus on fostering technical knowledge, professional development, and innovation among students.',
      category: 'general',
      tags: ['community', 'tech'],
      difficulty: 'beginner'
    },
    {
      question: 'How can I join ACM VIT Chennai?',
      answer: 'You can join by filling out the detailed application form on our website. We review applications based on your technical skills, enthusiasm, and commitment to learning. The selection process includes reviewing your application and potentially an interview.',
      category: 'membership',
      tags: ['application', 'process'],
      difficulty: 'easy'
    },
    // ... (previous FAQs remain the same)
    {
      question: 'Do you offer international collaborations?',
      answer: 'Yes! We frequently collaborate with international universities and tech organizations. Our members have opportunities to participate in global hackathons, research projects, and exchange programs.',
      category: 'events',
      tags: ['global', 'opportunities'],
      difficulty: 'advanced'
    }
  ];

  const categories = ['all', 'general', 'membership', 'events', 'technical'];
  const difficultyColors = {
    'beginner': 'bg-green-100 text-green-800',
    'easy': 'bg-blue-100 text-blue-800',
    'advanced': 'bg-purple-100 text-purple-800'
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => 
      (selectedCategory === 'all' || faq.category === selectedCategory) &&
      (searchQuery === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, selectedCategory, faqs]);

  const handleToggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-16 pb-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            ACM VIT Chennai FAQ
          </motion.h1>
          <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
            <HelpCircle className="text-blue-500" />
            Discover Answers to Your Burning Questions
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-2xl rounded-2xl p-6 mb-8"
        >
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            />
            {searchQuery ? (
              <X 
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
              />
            ) : (
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-3 py-1 rounded-full text-sm capitalize transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-100'
                  }
                `}
              >
                <Filter className="inline-block mr-1 h-4 w-4" /> {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {filteredFaqs.length > 0 ? (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1 
                  }
                }
              }}
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="mb-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`
                      bg-white shadow-lg rounded-2xl overflow-hidden
                      transition-all duration-300 
                      ${openIndex === index ? 'ring-4 ring-blue-200' : ''}
                    `}
                  >
                    <div 
                      onClick={() => handleToggleFAQ(index)}
                      className="flex items-center justify-between p-5 cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <HelpCircle className="text-blue-500" />
                        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${difficultyColors[faq.difficulty]}`}>
                          {faq.difficulty}
                        </span>
                        {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </div>
                    
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-gray-600"
                      >
                        <div className="border-t pt-4">
                          <p>{faq.answer}</p>
                          {faq.tags && (
                            <div className="flex items-center gap-2 mt-4">
                              <Star className="text-yellow-500 h-4 w-4" />
                              <div className="flex gap-2">
                                {faq.tags.map(tag => (
                                  <span 
                                    key={tag} 
                                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white shadow-lg rounded-2xl p-12"
            >
              <Zap className="mx-auto mb-4 text-yellow-500" size={48} />
              <p className="text-xl text-gray-600">
                No FAQs found matching your search criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FAQPage;