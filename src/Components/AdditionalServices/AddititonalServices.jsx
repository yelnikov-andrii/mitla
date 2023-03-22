import React from 'react';
import oven from './oven.svg';
import air from './air.svg';
import balcony from './balcony.svg';
import oven2 from './oven2.svg';
import kitchen from './kitchen.svg';
import fridge from './smart-fridge.svg';
import windows from './windows.svg';
import { Container } from 'react-bootstrap';

export const AddititonalServices = () => {
  const additionalServices = [
    {
      name: 'Помоем духовку',
      img: oven,
      price: 40
    },
    {
      name: 'Помоем вытяжку',
      img: air,
      price: 40
    },
    {
      name: 'Помоем микроволновку',
      img: oven2,
      price: 15
    },
    {
      name: 'Уберем в кухонных шкафчиках',
      img: kitchen,
      price: 55
    },
    {
      name: 'Помоем холодильник',
      img: fridge,
      price: 30
    },
    {
      name: 'Уберем балкон',
      img: balcony,
      price: 25
    },
    {
      name: 'Помоем окна',
      additional: '1 сторона',
      img: windows,
      price: 25
    }
  ]
  return (
    <div className='additionalServices'>
      <Container>
        <h3 className='additionalServices__title'>
          Дополнительные услуги
        </h3>
      </Container>
      <ul className='additionalServices__list'>
        {additionalServices.map(service => (
          <li className='services__item' key={service.name}>
            <img 
              src={service.img}
              alt=""
              className='services__img'
            />
            <p className='services__name'>
              {service.name}
              <span className='services__additional'>
                {service.additional && `(${service.additional})`}
              </span>
            </p>
            <p className='services__price'>
              {`${service.price} zł`}
            </p>
          </li>
        ))}
      </ul>
      <Container>
        <h4 className='additionalServices__titleh4'>
          Закажи уборку квартиры
        </h4>
        <p className='additionalServices__txt'>
          Порядок в твоей жизни начинается с порядка в твоем доме
        </p>
        <div className='additionalServices__btnBlock'>
        <button className='room__button'>
          Узнай стоимость
        </button>
        </div>
      </Container>
    </div>
  );
};

