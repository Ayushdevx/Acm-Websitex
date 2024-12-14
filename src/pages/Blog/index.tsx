import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import CreateBlog from './CreateBlog';

const Blog = () => {
  return (
    <Routes>
      <Route index element={<BlogList />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path=":postId" element={<BlogPost />} />
    </Routes>
  );
};

export default Blog;