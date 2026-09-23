import React from 'react';
import Post from './Post';
import '../styles/PostList.css';

type PostType = {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
  category: string;
};

const posts: PostType[] = [
  {
    id: 1,
    title: "Why I Switched from JavaScript to TypeScript",
    author: "Veronicah",
    content: "After months of debugging runtime errors that TypeScript would have caught instantly I finally made the switch. Here is what I learned in my first week and why I will never go back to plain JavaScript again.",
    date: new Date().toISOString().split('T')[0],
    category: "TypeScript",
  },
  {
    id: 2,
    title: "5 Things Nobody Tells You About Vite",
    author: "John Doe",
    content: "Vite changed how I think about build tools forever. The speed alone is worth it but there are hidden features most developers never discover. Here are the ones that saved me the most time.",
    date: "2026-09-20",
    category: "Tools",
  },
  {
    id: 3,
    title: "Stop Writing Messy React Components",
    author: "Jane Smith",
    content: "After reviewing hundreds of React codebases the same mistakes appear over and over again. Here are the patterns that separate clean maintainable code from spaghetti that nobody wants to touch.",
    date: "2026-09-15",
    category: "Best Practices",
  },
];

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <div className="post-list-header">
        <h2 className="post-list-title">Latest Posts</h2>
        <span className="post-count">{posts.length} articles</span>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          date={post.date}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default PostList;
