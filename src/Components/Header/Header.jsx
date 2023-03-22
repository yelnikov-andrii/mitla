import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuButton } from './HeaderMenuButton';
import { HeaderSelect } from './HeaderSelect';
import cleaningType from './cleaningType.svg';
import user from './User.svg';
import Button from 'react-bootstrap/Button';
import exclude from './Exclude.svg';
import messanger from './Messanger.svg';
import whatsapp from './whatsapp.svg';
import partners from './partners.svg';

export const Header = () => {
  const cleaningTypes = [
    'Стандартная уборка',
    'Уборка после ремонта',
    'Муж на час',
    'Уборка офиса',
    'Перевозки Переезды',
    'Дезинфекция',
    'Помощница по дому'
  ]
  return (
    <Navbar expand="xxl" className='header'>
      <div className='container-fluid row'>
        <div className='d-flex col-2 header__blockLogo'>
        <HeaderLogo />
        <HeaderMenuButton />
        </div>
        <div className='d-flex col-2 justify-content-between header__selectWrapper'>
        <HeaderSelect 
          options={['RU', 'PL', 'UKR', 'EN']}
          className="header__select"
        />
        <HeaderSelect 
          options={['Варшава', 'Познань', 'Вроцлав']}
          className="header__select header__select--city"
        />
        </div>
        <nav className='header__contacts col-2'>
          <a className='header__contactLink' href='tel:+48 797 524 604'>
          +48 797 524 604
          </a>
          <a href='/'>
            <img src={exclude} alt=""/>
          </a>
          <a href='/'>
            <img src={messanger} alt=""/>
          </a>
          <a href='/'>
            <img src={whatsapp} alt=""/>
          </a>
        </nav>
        <Navbar.Collapse className='header__navbar col-4'>
        <Nav className="header__nav">
          {cleaningTypes.map(type => (
            <Nav.Link className='header__link' key={type}>
              <img src={cleaningType} alt="" />
              <span className='header__linktxt'>
                {type}
              </span>
            </Nav.Link>
          ))}
        </Nav>
        </Navbar.Collapse>
        <div className='header__buttons col-2'>
        <Button className='header__partners'>
          <img 
            src={partners}
            alt=""
            className='header__partnersIcon'
          />
          <span>
            Партнерам
          </span>
        </Button>
        <Button className='header__user'>
          <img 
            src={user}
            alt=""
          />
        </Button>
        </div>
      </div>
    </Navbar>
  );
};

