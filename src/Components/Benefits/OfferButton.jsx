import classNames from 'classnames';
import React from 'react';

export const OfferButton = ({ button, discount, setDiscount }) => {
  return (
    <button 
      className={classNames('offers__button', {
        'offers__button--active': button.discount === discount
      })}
      onClick={(e) => {
        setDiscount(button.discount);
      }}
    >
      <span className={classNames('offers__discount', {
        'offers__discount--dnon': button.discount === 0
      })}>
        {button.discount > 0 && `-${button.discount}%`}
      </span>
      {button.name}
    </button>
  );
};

