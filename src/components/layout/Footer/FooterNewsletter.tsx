import React, { useState } from 'react';
import Button from '../../shared/Button';
import { Send } from 'lucide-react';

const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
        Subscribe to our newsletter
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Stay updated with our latest events and announcements.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
        <Button type="submit" icon={<Send className="h-4 w-4" />}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default FooterNewsletter;