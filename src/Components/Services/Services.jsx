import React from 'react';
import { Container } from 'react-bootstrap';
import broom from './broom.svg';
import cleaning from './cleaning.svg';
import desinf from './desinf.svg';
import move from './move.svg';
import paint from './paint.svg';
import repair from './repair.svg';
import workspace from './workspace.svg';

export const Services = () => {
  const services = [
    {
      name: 'Стандартная \n уборка',
      img: cleaning
    },
    {
      name: 'Уборка после \n ремонта',
      img: paint
    },
    {
      name: 'Муж на час',
      img: repair
    },
    {
      name: 'Уборка офиса',
      img: workspace
    },
    {
      name: 'Перевозки \n Переезды',
      img: move
    },
    {
      name: 'Дезинфекция',
      img: desinf
    },
    {
      name: 'Помощница \n по дому',
      img: broom
    }
  ];

  return (
    <section className='services'>
      <Container>
        <h3 className='services__title'>
          Наши услуги
        </h3>
        <ul className='services__list'>
          {services.map(service => (
            <li className='services__item'>
              <img 
                src={service.img}
                alt=""
                className='services__img'
              />
              <p className='services__name'>
                {service.name}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

