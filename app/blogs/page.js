'use client';

import React, { useState, useEffect } from 'react';
import DataSlider from '@/components/Blog/Slider';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <DataSlider data={blogs} />
    </div>
  );
};

export default BlogsPage;
