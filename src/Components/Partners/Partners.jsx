import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from './image 1.svg';
import img2 from './image 2.svg';
import img3 from './image 3.svg';
import img4 from './image 4.svg';
import img5 from './image 5.svg';
import img6 from './image 6.svg';
import img7 from './image 7.svg';
import img8 from './image 8.svg';
import img9 from './image 9.svg';
import img10 from './image 10.svg';
import img11 from './image 11.svg';
import img12 from './image 12.svg';
import img13 from './image 13.svg';
import img14 from './image 14.svg';
import img15 from './image 15.svg';
import img16 from './image 16.svg';
import img17 from './image 17.svg';
import img18 from './image 18.svg';
import img19 from './image 19.svg';
import img20 from './image 20.svg';
import img21 from './image 21.svg';
import img22 from './image 22.svg';
import img23 from './image 23.svg';
import img24 from './image 24.svg';
import img25 from './image 25.svg';
import img26 from './image 26.svg';

export const Partners = () => {
  const images = [
 img1,
 img2 ,
 img3 ,
 img4 ,
 img5 ,
 img6 ,
 img7 ,
 img8 ,
 img9 ,
 img10 ,
 img11 ,
 img12 ,
 img13 ,
 img14 ,
 img15 ,
 img16 ,
 img17 ,
 img18 ,
 img19 ,
 img20 ,
 img21 ,
 img22 ,
 img23 ,
 img24 ,
 img25 ,
 img26
  ];

  return (
    <section className='partners'>
      <Container>
        <h4 className='partners__title'>
          Наши партнеры
        </h4>
        <div className='partners__list'>
          {images.map(image => (
            <div className='partners__item' key={image}>
              <img 
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
        <h4 className='partners__title'>
          Корпоративные скидки и программы
        </h4>
        <p className='partners__txt'>
          Как работает система бонусов, как получить корпоративную скидку
        </p>
        <p className='partners__txtLight'>
          Если вы хотите стать корпоративным клиентом и получить дополнительные бонусы и для себя и для своих сотрудников, заполни форму ниже и наш менеджер свяжется с вами
        </p>
        <p className='partners__txtThin'>
          *Условия бонусов  для сотрудников узнавайте у вашего работодателя
        </p>
        <div className='partners__btnBlock'>
        <button className='partners__button'>
          Стать корпоративным клиентом
        </button>
        </div>
      </Container>
    </section>
  );
};

