import React from 'react';

interface PostProps {
  content: string;
}

const Post: React.FC<PostProps> = ({ content }) => {
  return (
    <div className="post">
      <p>{content}</p>
    </div>
  );
};

interface AdProps {
  content: string;
}

const Ad: React.FC<AdProps> = ({ content }) => {
  return (
    <div className="ad">
      <p>{content}</p>
    </div>
  );
};

interface TrendingTopicProps {
  topic: string;
}

const TrendingTopic: React.FC<TrendingTopicProps> = ({ topic }) => {
  return (
    <div className="trending-topic">
      <p>{topic}</p>
    </div>
  );
};

const Feed: React.FC = () => {
  const posts = ['Post 1', 'Post 2', 'Post 3'];
  const ads = ['Ad 1', 'Ad 2'];
  const trendingTopics = ['Topic 1', 'Topic 2', 'Topic 3'];

  return (
    <div>
      <h1>Feed</h1>
      <div className="feed-content">
        <h2>Posts</h2>
        {posts.map((post, index) => (
          <Post content={post} key={index} />
        ))}

        <h2>Ads</h2>
        {ads.map((ad, index) => (
          <Ad content={ad} key={index} />
        ))}

        <h2>Trending Topics</h2>
        {trendingTopics.map((topic, index) => (
          <TrendingTopic topic={topic} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;