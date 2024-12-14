import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterNewsletter from './FooterNewsletter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                ACM VIT
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Join VIT Chennai's premier tech community. Learn, grow, and innovate with fellow tech enthusiasts.
            </p>
            <FooterSocial />
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FooterLinks />
              <FooterNewsletter />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ACM VIT Chennai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;