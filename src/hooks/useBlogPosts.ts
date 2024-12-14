import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

// Simulated data - Replace with actual API calls
const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    content: 'Learn how to set up a new React project with TypeScript...',
    author: {
      id: '1',
      name: 'Ayush Upadhyay',
      image: 'https://media.licdn.com/dms/image/D4D03AQGfUQH0g7YNTA/profile-displayphoto-shrink_800_800/0/1705941700788?e=1739318400&v=beta&t=Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0Hs0',
    },
    createdAt: new Date().toISOString(),
    likes: 42,
    comments: [],
    tags: ['react', 'typescript', 'webdev'],
  },
  // Add more mock posts here
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(MOCK_POSTS);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};