import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Home</p>
      <br />
      <br />
      <Link to={'/nhac-tre'}>Nhac tre</Link>
      <Link to={'/nhac-trinh'}>Nhac trinh</Link>
    </div>
  );
}

export default Home;
