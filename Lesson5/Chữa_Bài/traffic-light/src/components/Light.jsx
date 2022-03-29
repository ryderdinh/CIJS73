import React from 'react';

function Light(props) {
  return (
    <div
      className={`light ${props.className} ${
        props.on === true ? 'light-on' : 'light-off'
      }`}
    ></div>
  );
}

export default Light;
