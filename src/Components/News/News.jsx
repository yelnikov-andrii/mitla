import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from './Rectangle 88.svg';
import img2 from './Rectangle 89.svg';
import img3 from './Rectangle 90.svg';

export const News = () => {
  const news = [
    {
      name: 'Периодичность проведения клининговых услуг',
      preview: 'Как часто убирать в офисе, производственных, технических и служебных помещениях — решение индивидуальное...',
      img: img1,
      date: '10 Марта 2023'
    },
    {
      name: 'Комплексная уборка предприятий общественного питания',
      preview: 'К заведениям, где изготавливаются продукты, предъявляются повышенные требования чистоты. Поэтому уборка помещений...',
      img: img2,
      date: '9 Марта 2023'
    },
    {
      name: 'Клининг для детей: ковры, матрасы и школьные классы',
      preview: 'Формирование характера ребенка и забота о его здоровье нуждаются в идеальной чистоте. Качественная уборка в детских садах...',
      img: img3,
      date: '7 Марта 2023'
    }
  ]
  return (
    <section className='news'>
      <Container>
        <h4 className='news__title'>
          Последние новости
        </h4>
        <div className='news__list'>
          {news.map(newsItem => (
            <div>
              <img 
                src={newsItem.img}
                alt=""
              />
              <p>
                {newsItem.date}
              </p>
              <p>
                {newsItem.name}
              </p>
              <p>
                {newsItem.preview}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
