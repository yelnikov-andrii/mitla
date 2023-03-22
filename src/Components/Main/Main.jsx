import React from 'react';
import { Container } from 'react-bootstrap';
import { Calculator } from './Calculator';

export const Main = () => {
  return (
    <main className='main'>
      <Container className="container-xxl">
        <h1 className='main__title'>
          Закажи уборку квартиры
        </h1>
        <p className='main__txt'>
          В услугу входит уборка комнаты, кухни, ванной комнаты и коридора
        </p>
        <Calculator />
      </Container>
    </main>
  );
};

