import React from 'react';

function ReactMemo({ memoData, handleClick2 }) {
  console.log('re-render');
  return <div>ReactMemo</div>;
}

export default React.memo(ReactMemo);
