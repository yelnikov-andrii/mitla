import React from 'react';
import exclude from './Exclude.svg';
import messanger from './Messanger.svg';
import whatsapp from './whatsapp.svg';

export const Contacts = () => {
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
  ];

  return (
    <div className='contacts'>
      {contacts.map(contact => (
        <a 
          className='contacts__button'
          style={{
            background: `${contact.color}`
          }}
          href='/'
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
  );
};

