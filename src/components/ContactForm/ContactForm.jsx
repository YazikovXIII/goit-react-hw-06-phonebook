import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { addUser } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const isFormFilled = name && number;

  const handleChange = e => {
    const { name, value } = e.target;
    // eslint-disable-next-line
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const arrayOfNames = [];
    contacts.forEach(user => {
      arrayOfNames.push(user.name.toLowerCase());
    });
    if (arrayOfNames.includes(name.toLowerCase())) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addUser(name, number));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact_add__form">
      <label htmlFor={nameInputId}>Name</label>
      <input
        id={nameInputId}
        className="form__input"
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        id={numberInputId}
        className="form__input"
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <div className="form__button_container">
        {isFormFilled ? (
          <button className="form__button" type="submit">
            Add contact
          </button>
        ) : (
          <p className="form__message">Fill the fields to Add contact</p>
        )}
      </div>
    </form>
  );
};
