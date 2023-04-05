import React, { useRef, useState } from "react";
import { nanoid } from 'nanoid'

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const inputNameId = useRef(nanoid());
  const inputPhoneId = useRef(nanoid());

  const handleOnInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default:
        return;
    }
  };

  const handleOnFormSubmit = e => {
    e.preventDefault();
    onSubmit({name:name, number:number})
    setName('');
    setNumber('');
  };

    return (
      <form id="form" onSubmit={handleOnFormSubmit}>
        <div className="phonebook__name">
          <label htmlFor={inputNameId} className="phonebook__label">
            Name
          </label>
          <input
            className="phonebook__input"
            id={inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleOnInputChange}
          />
        </div>
        <div className="phonebook__phone">
          <label htmlFor={inputPhoneId} className="phonebook__label">
            Number
          </label>
          <input
            className="phonebook__input"
            id={inputPhoneId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleOnInputChange}
          />
        </div>
        <button type="submit" className="phonebook__btn">
          Add contact
        </button>
        <div />
      </form>
    );
}