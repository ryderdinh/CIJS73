import React from 'react';

function FeedItem({ title }) {
  return (
    <article className='feed-item'>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing</h5>
      <img
        src='https://daily-now-res.cloudinary.com/image/upload/f_auto,q_auto/v1643371893/a/1024x512_React_v1'
        alt=''
      />
    </article>
  );
}

export default FeedItem;
