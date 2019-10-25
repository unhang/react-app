import React from 'react';

// state
// props
// children

const Scroll = (props) => {
  console.log(props.children)
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;