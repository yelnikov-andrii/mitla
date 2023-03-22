import React from 'react';

export const Counter = ({ name }) => {
  const [count, setCount] = React.useState(1);
  return (
    <div className='counter'>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (count > 1) {
            setCount(count => count - 1);
          }
        }}
        className="counter__button"
      >
        -
      </button>
      <span className='counter__txt'>
        {`${count} ${name}`}
      </span>
      <button
        className="counter__button"
        onClick={(e) => {
          e.preventDefault();
          setCount(count => count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

