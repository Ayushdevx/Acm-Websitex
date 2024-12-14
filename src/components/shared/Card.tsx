import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        shadow-lg dark:shadow-gray-900/30
        border border-gray-100 dark:border-gray-700
        rounded-2xl p-6
        transition-all duration-300
        ${hover ? 'hover:shadow-xl dark:hover:shadow-gray-900/40 transform hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;