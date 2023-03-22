import React from 'react';

export const Room = ({room, discount}) => {
  const coefficient = discount / 100;
  const finishPrice = room.price - room.price * coefficient;
  return (
    <div className='room'>
      <p className='room__name'>
        {room.name}
      </p>
      <p className='room__price'>
        {`${finishPrice.toFixed(2)} zł`}
      </p>
      <p className='room__description'>
        {room.description}
      </p>
      <button className='room__button'>
        Заказать
      </button>
    </div>
  );
};

