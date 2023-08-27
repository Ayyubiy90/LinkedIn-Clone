import React from 'react';
import './Feed.css';

interface PostProps {
  content: string;
}

interface TrendingTopicProps {
    topic: string;
  }


interface AdProps {
    content: string;
  }
  

const Post: React.FC<PostProps> = ({ content }) => {
    return (
      <div className="post bg-blue-100 rounded-lg p-4 mb-4">
        <p>{content}</p>
      </div>
    );
  };
  
  const Ad: React.FC<AdProps> = ({ content }) => {
    return (
      <div className="ad bg-green-100 rounded-lg p-4 mb-4">
        <p>{content}</p>
      </div>
    );
  };
  
  const TrendingTopic: React.FC<TrendingTopicProps> = ({ topic }) => {
    return (
      <div className="trending-topic bg-yellow-100 rounded-lg p-4 mb-4">
        <p>{topic}</p>
      </div>
    );
  };
  
  const Feed: React.FC = () => {
    const posts = ['Post 1', 'Post 2', 'Post 3'];
    const ads = ['Ad 1', 'Ad 2'];
    const trendingTopics = ['Topic 1', 'Topic 2', 'Topic 3'];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Feed</h1>
        <div className="feed-content">
          <h2 className="text-2xl mb-2">Posts</h2>
          {posts.map((post, index) => (
            <Post content={post} key={index} />
          ))}
  
          <h2 className="text-2xl mb-2">Ads</h2>
          {ads.map((ad, index) => (
            <Ad content={ad} key={index} />
          ))}
  
          <h2 className="text-2xl mb-2">Trending Topics</h2>
          {trendingTopics.map((topic, index) => (
            <TrendingTopic topic={topic} key={index} />
          ))}
        </div>
      </div>
    );
  };  

export default Feed;