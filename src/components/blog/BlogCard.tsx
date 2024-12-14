import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import Card from '../shared/Card';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
        text: post.content.substring(0, 100) + '...',
        url: window.location.origin + '/blog/' + post.id,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Card className="overflow-hidden">
      <Link to={`/blog/${post.id}`}>
        <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10"></div>
          <h2 className="absolute bottom-0 left-0 right-0 p-6 text-xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h2>
        </div>
      </Link>

      <div className="mb-4">
        <div className="flex items-center mb-4">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{post.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.content}</p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
            <Heart className="h-5 w-5" />
            <span>{post.likes}</span>
          </button>
          <Link
            to={`/blog/${post.id}#comments`}
            className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments.length}</span>
          </Link>
        </div>
        <button
          onClick={handleShare}
          className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default BlogCard;