import React from 'react';
import { socialLinks } from '../../../config/footer';

const FooterSocial: React.FC = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;