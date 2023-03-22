import React from 'react';

export const CleaningBlock = ({ block }) => {
  console.log(block.width)
  return (
    <div 
      className='cleaningBlock'
      style={{
        width: `${block.width}px`,
        height: `${block.height}px`,
        transform: `translateY(${block.y}px)`,
        marginLeft: `${block.left}px`
      }}
    >
      {block.txt}
      <span className='cleaningBlock__additional'>
        {block.additional}
      </span>
    </div>
  );
};

