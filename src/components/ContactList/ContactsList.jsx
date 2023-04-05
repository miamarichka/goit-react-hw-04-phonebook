import React from 'react';
import { nanoid } from 'nanoid';
import { Contact } from '../ContactItem/Contact';

export const ContactsList = ({ contactsList, onDeleteContact }) => {
  return (
    <>
      <ul className="contact-list">
        {contactsList.map(contact => {
          return (
            <Contact
              name={contact.name}
              number={contact.number}
              key={nanoid()}
              id={nanoid()}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};
