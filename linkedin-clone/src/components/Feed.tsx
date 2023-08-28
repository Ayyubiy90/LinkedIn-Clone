import React from 'react';
import './Feed.css';

interface PostProps {
  content: string;
  author: string;
  timeAgo: string;
  image?: string;
  video?: string;
  comments?: string[];
}

interface TrendingTopicProps {
  topic: string;
}

interface AdProps {
  content: string;
}

const Post: React.FC<PostProps> = ({ content, author, timeAgo, image, video, comments }) => {
  return (
    <div className="post bg-white rounded-lg p-4 mb-4 shadow">
      <div className="post-header flex justify-between">
        <span className="author font-bold">{author}</span>
        <span className="time-ago text-gray-500 text-sm">{timeAgo}</span>
      </div>
      <p className="mt-2">{content}</p>
      {image && <img src={image} alt={`${author}'s post`} className="rounded mt-2"/>}
      {video && <video src={video} controls className="rounded mt-2"/>}
      <div className="post-actions flex justify-between mt-4">
        <button className="text-blue-500">Like</button>
        <button className="text-blue-500">Comment</button>
        <button className="text-blue-500">Share</button>
      </div>
      {comments && (
        <div className="post-comments mt-4">
          {comments.slice(0, 2).map((comment, index) => (
            <p key={index} className="text-sm text-gray-600">{comment}</p>
          ))}
          {comments.length > 2 && <button className="mt-2 text-blue-500">See more comments</button>}
        </div>
      )}
    </div>
  );
};

const Ad: React.FC<AdProps> = ({ content }) => {
  return (
    <div className="ad bg-green-200 rounded-lg p-4 mb-4 shadow">
      <p>{content}</p>
    </div>
  );
};

const TrendingTopic: React.FC<TrendingTopicProps> = ({ topic }) => {
  return (
    <div className="trending-topic bg-yellow-200 rounded-lg p-4 mb-4 shadow">
      <p>{topic}</p>
    </div>
  );
};

const Feed: React.FC = () => {
  const posts = [
    { content: 'Post 1', author: 'John Doe', timeAgo: '2 hours ago', image: 'image1.jpg', comments: ['Great post!', 'Nice!'] },
    { content: 'Post 2', author: 'Jane Doe', timeAgo: '1 day ago', video: 'video1.mp4' },
    { content: 'Post 3', author: 'Emma', timeAgo: '3 days ago', comments: ['Wow!', 'Amazing!', 'Keep it up!'] }
  ];
  const ads = ['Ad 1', 'Ad 2'];
  const trendingTopics = ['Topic 1', 'Topic 2', 'Topic 3'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Feed</h1>
      <div className="feed-content">
        <h2 className="text-2xl mb-2">Posts</h2>
        {posts.map((post, index) => (
          <Post {...post} key={index} />
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