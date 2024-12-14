import React from 'react';
import { FAQ } from '../../types';
import FAQItem from './FAQItem';

interface FAQSectionProps {
  faqs: FAQ[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, openIndex, setOpenIndex }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQSection;