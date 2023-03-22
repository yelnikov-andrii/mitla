import classNames from 'classnames';
import React from 'react';
import { Container } from 'react-bootstrap';
import { CleaningBlock } from './CleaningBlock';

export const Cleaning = () => {
  const [partOfAppartment, setPartOfAppartment] = React.useState('Комната');

  const buttons = [
    'Комната',
    'Коридор',
    'Кухня',
    'Санузел'
  ];

  return (
    <section className='cleaning'>
      <Container>
        <h3 className='cleaning__title'>
          Из чего состоит уборка
        </h3>
        <div className='cleaning__buttons'>
          {buttons.map(button => (
            <button 
              className={classNames('cleaning__button', {
                'cleaning__button--active': button === partOfAppartment
              })}
              onClick={(e) => {
                setPartOfAppartment(button)
              }}
              key={button}
            >
              {button}
            </button>
          ))}
        </div>
        <div className='cleaning__scheme'>
        <div className='cleaning__schemeBlock mb-4'>
          <CleaningBlock 
            block={{
              txt: 'Помоем подоконники, батареи, двери, ручки,выключатели ',
              width: '321',
              height: '108',
              y: 0,
              left: 5,
            }}
          />
          <CleaningBlock 
            block={{
              txt: 'Почистим зеркала ',
              width: '261',
              height: '80',
              y: -50,
              left: 5,
            }}
          />
        </div>
        <div className='cleaning__schemeBlock'>
          <CleaningBlock 
            block={{
              txt: 'Сложим аккуратно вещи',
              width: 261,
              height: 80,
              y: 0,
              left: 10,
              additional: '( р-р до 1м.кв., если р-р зеркала больше, то закажи доп. услугу)'
            }}
          />
        </div>
        <div className='cleaning__schemeBlock'>
          <CleaningBlock 
            block={{
              txt: 'Вынесем мусор',
              width: 230,
              height: 80,
              y: -30,
              left: 55,
            }}
          />
        </div>
        <div className='cleaning__schemeBlock'>
          <CleaningBlock 
            block={{
              txt: 'заправим кровати поменяем постельное белье',
              width: 361,
              height: 80,
              y: 26,
              left: 3,
            }}
          />
          <CleaningBlock 
            block={{
              txt: 'Вытрем пыль со всех открытых поверхностей',
              width: 321,
              height: 80,
              y: 66,
              left: 1,
            }}
          />
        </div>
        <div className='cleaning__schemeBlock'>
          <CleaningBlock 
            block={{
              txt: 'Помоем полы и плинтус',
              width: 321,
              height: 80,
              y: 116,
              left: 1,
            }}
          />
        </div>
        </div>
      </Container>
    </section>
  );
};

