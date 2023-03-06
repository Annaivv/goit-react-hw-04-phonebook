import '../index.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import ContactForm from './ContactForm/ContactForm';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    for (const contact of contacts) {
      const normalizeStateName = contact.name.toLowerCase();
      const normalizedReceivedName = name.toLowerCase();

      if (normalizeStateName === normalizedReceivedName) {
        alert(`${name} is already in contacts.`);
        return contacts;
      }
    }
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
    console.log(contacts);
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <GlobalStyle />
    </Layout>
  );
};
