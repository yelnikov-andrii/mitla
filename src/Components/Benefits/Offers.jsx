import React from 'react';
import { OfferButton } from './OfferButton';
import { Room } from './Room';

export const Offers = () => {
  const [discount, setDiscount] = React.useState(20);
  const buttons = [
    {
      name: 'Раз в неделю',
      discount: 20,
    },
    {
      name: 'Раз в две недели',
      discount: 15,
    },
    {
      name: 'Раз в месяц',
      discount: 10,
    },
    {
      name: 'Разовая уборка',
      discount: 0,
    }
  ];

  const rooms = [
    {
      name: 'Однокомнатная',
      price: 143.90,
      description: 'В стоимость входит уборка комнаты, кухни, ванной комнаты и коридора'
    },
    {
      name: 'Двухкомнатная',
      price: 172.70,
      description: 'В стоимость входит уборка комнаты, кухни, ванной комнаты и коридора'
    },
    {
      name: 'Трехкомнатная',
      price: 201.50,
      description: 'В стоимость входит уборка комнаты, кухни, ванной комнаты и коридора'
    }
  ];

  return (
    <div className='offers'>
    <div className='offers__buttons'>
      {buttons.map(button => (
        <OfferButton 
          button={button}
          discount={discount}
          setDiscount={setDiscount}
          key={button.name}
        />
      ))}
    </div>
    <div className='offers__rooms'>
      {rooms.map(room => (
        <Room 
          room={room} 
          discount={discount}
          key={room.name}
        />
      ))}
    </div>
    </div>
  );
};

