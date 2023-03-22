import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import feedback from './feedback.svg';
import { Feedback } from './Feedback';
import { Container } from 'react-bootstrap';
import { SliderButton } from './SliderButton';

export const Slider = () => {
  const feedbacks = [
    {
      img: feedback,
      name: 'Марина',
      rating: 5,
      body: 'Большое спасибо за работу, аккуратную, качественную, вежливую и профессиональную. Остались очень довольны результатом, и однозначно в планах пользоваться услугами далее.',
    },
    {
      img: feedback,
      name: 'Кристина',
      rating: 2,
      body: 'Большое спасибо за работу, аккуратную, качественную, вежливую и профессиональную. Остались очень довольны результатом, и однозначно в планах пользоваться услугами далее.',
    },
    {
      img: feedback,
      name: 'Ирина',
      rating: 4,
      body: 'Большое спасибо за работу, аккуратную, качественную, вежливую и профессиональную. Остались очень довольны результатом, и однозначно в планах пользоваться услугами далее.',
    }
  ]
  return (
    <div className='slider'>
    <Container>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="slider__swiper"
    >  {feedbacks.map(feedback => (
      <SwiperSlide>
        <Feedback 
          feedback={feedback}
        />
      </SwiperSlide>
    ))}
    </Swiper>
    <div className='slider__buttons'>
      <SliderButton txt="Оставить свой отзыв" />
      <SliderButton txt="Все отзывы" />
    </div>
    </Container>
    </div>

  );
};

