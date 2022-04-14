import React from 'react';

function ResultComponent({ movieDetail }) {
  return (
    <div>
      {Object.keys(movieDetail).length !== 0 ? (
        <>
          <h2>Title: {movieDetail.title}</h2>
          <p>Description: {movieDetail.overview}</p>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default ResultComponent;
