// import React, { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { Section } from './Section/Section.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');

  //   if (savedContacts) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // const addContact = newContact => {
  //   const nameExist = contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (nameExist) {
  //     alert(`${newContact.name} is already in contacts.`);
  //   } else {
  //     const updatedContacts = [...contacts, newContact];
  //     setContacts(updatedContacts);
  //     localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Save to local storage here
  //   }
  // };

  // const changeFilter = filter => {
  //   setFilter(filter);
  // };

  // const getFilteredContacts = () => {
  //   const lowercasedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(lowercasedFilter)
  //   );
  // };
  // const filteredContacts = getFilteredContacts();

  // const deleteContact = contactId => {
  //   const updatedContacts = contacts.filter(
  //     contact => contact.id !== contactId
  //   );
  //   setContacts(updatedContacts);
  //   localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Save to local storage here
  // };
  const contacts = useSelector(state => state.contacts);
  return (
    <Wrapper>
      <Section>
        <h1 className="form__title">Phonebook</h1>
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section>
          <h2 className="contacts__list_title">Contacts</h2>
          <Filter />
          <ContactList />
        </Section>
      )}
    </Wrapper>
  );
};
