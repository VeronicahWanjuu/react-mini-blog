import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Dev <span className="logo-accent">Insights</span></h1>
        <p className="header-tagline">Tips and insights for developers</p>
      </div>
      <nav className="header-nav">
        <a href="#new-post" className="nav-link">+ New Post</a>
      </nav>
    </header>
  );
};

export default Header;
