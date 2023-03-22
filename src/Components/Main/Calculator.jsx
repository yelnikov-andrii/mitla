import React from 'react';
import { Counter } from './Counter';

export const Calculator = () => {
  return (
    <div className='calculator'>
        <Counter name="комната" />
        <Counter name="санузел" />
        <button className='calculator__button'>
          Рассчитать стоимость
        </button>
    </div>
  );
};

