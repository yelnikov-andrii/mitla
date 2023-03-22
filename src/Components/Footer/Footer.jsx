import React from 'react';
import { Container } from 'react-bootstrap';
import logo from './Logo.svg';
import bank1 from './image 28.svg';
import bank2 from './image 29.svg';
import bank3 from './image 30.svg';
import bank4 from './image 31.svg';
import mitla from './Group 16.svg';
import address from './address.svg';
import call from './call.svg';
import email from './email.svg';

export const Footer = () => {
  const links = [
    'О нас',
    'Вопросы и ответы',
    'Отзывы',
    'Услуги уборки',
    'Скидки и акции',
    'Что убираем',
    'Вакансии'
  ];

  const links2 = [
    'Уборка квартиры',
    'Уборка после ремонта',
    'Муж на час',
    'Уборка офиса',
    'Перевозки / Переезды',
    'Дезинфекция',
    'Помощница по дому',
    'Доп. услуги'
  ];

  const links3 = [
    'Корпоративные скидки и программы',
    'Стань нашим партнером',
    'Вакансии',
    'Цены за услуги'
  ]

  return (
    <footer className='footer'>
      <Container>
        <div className='footer__block'>
          <div className='footer__blockItem'>
            <img 
              src={logo}
              alt=""
              className='footer__logo'
            />
            <p className='footer__info'>
              Milta Sp. z o.o., 
              KRS 0000868230,
              NIP: 6751738063,
              REGON: 38745511400000
            </p>
            <div className='footer__infoBlock'>
              <img 
                src={bank1}
                alt=""
              />
              <img 
                src={bank2}
                alt=""
              />
            </div>
            <div>
            <img 
              src={bank3}
              className="footer__imgBank"
              alt=""
            />
            </div>
            <div>
            <img 
              src={bank4}
              alt=""
              className='footer__imgBank'
            />
            </div>
          </div>
          <div className='footer__blockItem'>
            <div className='footer__header'>
              <img 
                src={mitla}
                alt=""
              />
            </div>
            <ul className='footer__list'>
              {links.map(link => (
                <li key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className='footer__blockItem'>
            <div className='footer__header'>
              <p className='footer__title'>
                Услуги
              </p>
            </div>
            <ul className='footer__list'>
              {links2.map(link => (
                <li key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className='footer__blockItem'>
            <div className='footer__header'>
              <p className='footer__title'>
                Скидки и акции
              </p>
            </div>
            <ul className='footer__list'>
              {links3.map(link => (
                <li key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <nav className='footer__contacts'>
          <div className='footer__contact'>
            <img 
              src={address}
              alt=""
            />
            <a 
              className='footer__contactlink'
              href='/'
            >
              Warszawa, Al. Jana Pawła II lok 125, 
              <br />
              00-175 Warszawa
          </a>
          </div>
          <div className='footer__contact'>
            <img 
              src={email}
              alt=""
            />
            <a 
              className='footer__contactlink'
              href='mailto:info@mitla.pl'
            >
              info@mitla.pl
            </a>
          </div>
          <div className='footer__contact'>
            <img 
              src={call}
              alt=""
            />
            <a 
              href='tel:+48 797 524 604'
              className='footer__contactlink'
            >
              +48 797 524 604
            </a>
          </div>
        </nav>
        <div className='footer__buttons'>
          <button className='footer__button'>
            Публичный договор
          </button>
          <button className='footer__button'>
            Политика приватности
          </button>
          <button className='footer__button'>
            Polityka cookies
          </button>
        </div>
      </Container>
    </footer>
  );
};

