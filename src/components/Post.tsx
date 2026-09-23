import React from 'react';
import '../styles/Post.css';

type PostProps = {
  title: string;
  author: string;
  content: string;
  date: string;
  category: string;
};

const Post: React.FC<PostProps> = ({ title, author, content, date, category }) => {
  const isNew = () => {
    const postDate = new Date(date);
    const now = new Date();
    const diff = now.getTime() - postDate.getTime();
    return diff < 24 * 60 * 60 * 1000;
  };

  const isHighlighted = author === "Veronicah";

  const readingTime = Math.ceil(content.split(' ').length / 200);

  return (
    <div
      className="post"
      style={{ borderLeftColor: isHighlighted ? "#e94560" : "#7ec8e3" }}
    >
      <div className="post-header">
        <span className="post-category">{category}</span>
        {isNew() && <span className="new-badge">New!</span>}
      </div>
      <h2 className="post-title">{title}</h2>
      <p className="post-author">By {author}</p>
      <p className="post-content">{content.substring(0, 120)}...</p>
      <div className="post-footer">
        <span className="post-date">{date}</span>
        <span className="post-reading-time">{readingTime} min read</span>
      </div>
    </div>
  );
};

export default React.memo(Post);
