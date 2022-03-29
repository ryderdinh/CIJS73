import React from 'react';
import FeedItem from './FeedItem';

function FeedList(props) {
  console.log(props);
  const feed = props.feed;

  return (
    <div className='feed-list'>
      {feed.map((item, index) => (
        <FeedItem title={item.value} />
      ))}
    </div>
  );
}

export default FeedList;
