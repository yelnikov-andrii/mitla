import React from 'react';
import { FeedbackRate } from './FeedbackRate';

export const Feedback = ({ feedback }) => {
  return (
    <div className='feedback'>
      <div className='feedback__user'>
        <img 
          src={feedback.img}
          alt=""
          className='feedback__img'
        />
        <div className='feedback__info'>
          <p className='feedback__name'>
            {feedback.name}
          </p>
          <FeedbackRate 
            count={feedback.rating}
          />
        </div>
      </div>
      <div className='feedback__body'>
        {feedback.body}
      </div>
    </div>
  );
};

