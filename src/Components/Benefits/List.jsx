import React from 'react';
import money from './money 1.svg';
import wallet from './wallet 1.svg';
import allday from './24-7 1.svg';
import eco from './eco 1.svg';


export const List = () => {
  const list = [
    {
      img: money,
      name: 'Фиксированная цена',
      description: 'Стоимость не меняется вашем в процессе уборки'
    },
    {
      img: wallet,
      name: 'Удобный способ оплаты',
      description: 'Оплата производиться любым удобным для вас способом'
    },
    {
      img: allday,
      name: 'Уборка 24/7',
      description: 'Мы работаем круглосуточно'
    },
    {
      img: eco,
      name: 'Eco',
      description: 'Мы заботимся о здоровье, пользуясь эко химией для уборки'
    }
  ];

  return (
    <ul className='list'>
      {list.map(listItem => (
        <li className='list__item' key={listItem.name}>
            <img 
              src={listItem.img}
              alt=""
              className='list__img'
            />
          <p className='list__itemName'>
            {listItem.name}
          </p>
          <p className='list__itemDescription'>
            {listItem.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

