import React from 'react';
import { Container } from 'react-bootstrap';
import { List } from './List';
import { Offers } from './Offers';

export const Benefits = () => {
  return (
    <section className='benefits'>
      <Container>
        <List />
        <h2 className='benefits__title'>
          Скидки для постоянных клиентов
        </h2>
        <p className='benefits__txt'>
          Выберите периодичность уборки, чтобы увидеть цену с учетом скидки
        </p>
        <Offers />
      </Container>
    </section>
  );
};

