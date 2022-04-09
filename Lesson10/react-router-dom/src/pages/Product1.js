import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product1() {
  const navigate = useNavigate();

  return (
    <div>
      Product-1
      <button
        onClick={() => {
          navigate('/hello');
        }}
      >
        Jump to Hello Page
      </button>
    </div>
  );
}

export default Product1;
