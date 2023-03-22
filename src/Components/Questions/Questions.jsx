import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import exclude from './Exclude.svg';
import messanger from './Messanger.svg';
import whatsapp from './whatsapp.svg';

export const Questions = () => {
  const questions = [
    {
      question: 'Вы используете свои химические средства или я должен предоставить?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla`,
      key: '1'
    },
    {
      question: 'Как давно вы работаете?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla`,
      key: '2'
    },
    {
      question: 'Какой у вас опыт?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla`,
      key: '3'
    },
    {
      question: 'Кто ваши сотрудники?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla`,
      key: '4'
    },
    {
      question: 'Могу ли я заказать только доп.услугу?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla`,
      key: '5'
    },
    {
      question: 'Моете ли вы окна с внешней стороны?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla`,
      key: '6'
    }
  ];

  const contacts = [
    {
      name: 'Telegram',
      img: exclude,
      color: '#419FD9'
    },
    {
      name: 'Messenger',
      img: messanger,
      color: '#1876F2'
    },
    {
      name: 'WhatsApp',
      img: whatsapp,
      color: '#0DC143'
    }
  ]

  return (
    <section className='questions'>
      <Container>
        <h4 className='questions__title'>
          Часто задаваемые вопросы
        </h4>
        <Accordion className='questions__accordion'>
          {questions.map(question => (
            <Accordion.Item 
              eventKey={question.key}
              className='questions__item'
              key={question.key}
            >
            <Accordion.Header>
              <span className='questions__question'> 
                {question.question}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              {question.answer}
            </Accordion.Body>
          </Accordion.Item>
          ))}
        </Accordion>
        <h5 className='questions__titleh5'>
          Служба поддержки 24/7
        </h5>
        <div className='questions__buttons'>
          {contacts.map(contact => (
            <a 
              className='questions__button'
              style={{
                background: `${contact.color}`
              }}
              href='/'
              key={contact.name}
            >
              <img 
                src={contact.img}
                alt=""
              />
              <p className='m-0'>
                {contact.name}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

