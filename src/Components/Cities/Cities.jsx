import React from 'react';
import { Container } from 'react-bootstrap';
import { CitiesBlock } from './CitiesBlock';

export const Cities = () => {
  const cities1 = [
    {
      name: 'Piastów',
      price: 15
    },
    {
      name: 'Pruszków ',
      price: 15
    },
    {
      name: 'Piaseczno',
      price: 18
    },
    {
      name: 'Sulejowek',
      price: 20
    },
    {
      name: 'Józefów',
      price: 50
    },
    {
      name: 'Kobyłka',
      price: 30
    },
    {
      name: 'Ożarów Mazowiecki',
      price: 35
    },
    {
      name: 'Otwock',
      price: 50
    },
    {
      name: 'Zielonka',
      price: 25
    },
    {
      name: 'Legionowo',
      price: 30
    },
    {
      name: 'Józefosław',
      price: 25
    },
    {
      name: 'Nieporęt',
      price: 80
    },
  ];

  const cities2 = [
    {
      name: 'Ząbki',
      price: 20
    },
    {
      name: 'Radzymin',
      price: 75
    },
    {
      name: 'Wola Mrokowska',
      price: 100
    },
    {
      name: 'Żyrardów',
      price: 90
    },
    {
      name: 'Nadarzyn',
      price: 70
    },
    {
      name: 'Izabelin',
      price: 50
    },
    {
      name: 'Milanówek',
      price: 30
    },
    {
      name: 'Leszno',
      price: 70
    },
    {
      name: 'Solec',
      price: 70
    },
    {
      name: 'Młochow',
      price: 50
    },
    {
      name: 'Nowy Dwór Mazowiecki',
      price: 60
    },
    {
      name: 'Jabłonna',
      price: 30
    }, 
  ];

  const cities3  = [
    {
      name: 'Konstancin-Jeziorna',
      price: 40
    },
    {
      name: 'Wołomin',
      price: 35
    },
    {
      name: 'Nowa Iwiczna',
      price: 20
    },
    {
      name: ' Łazy',
      price: 40
    },
    {
      name: 'Łomianki',
      price: 15
    },
    {
      name: 'Raszyn',
      price: 15
    },
    {
      name: 'Marki',
      price: 20
    },
    {
      name: 'Grodzisk Mazowiecki',
      price: 50
    },
    {
      name: 'Brwinów',
      price: 25
    },
    {
      name: 'Błonie',
      price: 40
    },
  ];

  return (
    <section className='cities'>
      <Container>
        <h4 className='cities__title'>
          В каких городах мы работаем
        </h4>
        <div className='cities__block'>
        <CitiesBlock cities={cities1} />
        <CitiesBlock cities={cities2} />
        <CitiesBlock cities={cities3} />
        </div>
      </Container>
    </section>
  );
};

