import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import ThemeToggle from '../shared/ThemeToggle';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            ACM VIT
          </span>
        </Link>
      </div>
      <Navigation />
      <ThemeToggle />
    </div>
  );
};

export default Header;