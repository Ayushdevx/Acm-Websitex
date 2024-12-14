import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../config/navigation';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex items-baseline space-x-4">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`${
            link.special
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all'
              : location.pathname === link.path
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
          } px-3 py-2 text-sm font-medium transition-colors duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;