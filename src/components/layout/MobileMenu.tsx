import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`${
              link.special
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white'
                : location.pathname === link.path
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300'
            } block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;