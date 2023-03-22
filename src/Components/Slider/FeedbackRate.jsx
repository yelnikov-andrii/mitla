import React from 'react';
import star from './star.svg';

export const FeedbackRate = ({ count }) => {
  const ratings = new Array(count);
  ratings.fill(star);

  return (
    <div className='feedback__rating'>
      {ratings.map((star, index) => (
        <React.Fragment key={index}>
        <img 
          src={star}
          alt=""
        />
        </React.Fragment>
      ))}
    </div>
  );
};

