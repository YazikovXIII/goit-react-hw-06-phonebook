import React, { useEffect, useState } from 'react';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { Section } from './Section/Section.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// export class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');

//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     const nameExist = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     );

//     if (nameExist) {
//       alert(`${newContact.name} is already in contacts.`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };

//   changeFilter = filter => {
//     this.setState({ filter });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const lowercasedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(lowercasedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <Wrapper>
//         <Section>
//           <h1 className="form__title">Phonebook</h1>
//           <ContactForm onSubmit={this.addContact} />
//         </Section>
//         {this.state.contacts.length > 0 && (
//           <Section>
//             <h2 className="contacts__list_title">Contacts</h2>
//             <Filter value={filter} onChangeFilter={this.changeFilter} />
//             <ContactList
//               contacts={filteredContacts}
//               onDeleteContact={this.deleteContact}
//             />
//           </Section>
//         )}
//       </Wrapper>
//     );
//   }
// }

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const addContact = newContact => {
    const nameExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (nameExist) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      const updatedContacts = [...contacts, newContact];
      setContacts(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Save to local storage here
    }
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    const lowercasedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercasedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Save to local storage here
  };

  return (
    <Wrapper>
      <Section>
        <h1 className="form__title">Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section>
          <h2 className="contacts__list_title">Contacts</h2>
          <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      )}
    </Wrapper>
  );
};
