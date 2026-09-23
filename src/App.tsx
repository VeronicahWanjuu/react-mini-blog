import React from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import withLogger from './components/withLogger';
import './styles/App.css';

const PostListWithLogger = withLogger(PostList, 'PostList');

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <PostListWithLogger />
      </main>
    </div>
  );
}

export default App;
