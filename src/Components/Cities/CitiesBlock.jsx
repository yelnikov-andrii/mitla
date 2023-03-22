import React from 'react';
import coords from './coords.svg';

export const CitiesBlock = ({cities}) => {
  return (
    <div className='citiesBlock'>
      {cities.map(city => (
        <div className='citiesBlock__item' key={city.name}>
          <div className='citiesBlock__coordsBlock'>
          <img 
            src={coords}
            alt=""
          />
          <p className='citiesBlock__city'>
            {city.name}
          </p>
          </div>
          <p className='citiesBlock__price'>
            {`+ ${city.price}.00 zł`}
          </p>
        </div>
      ))}
    </div>
  );
};

