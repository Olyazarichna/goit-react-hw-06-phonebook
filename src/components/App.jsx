import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const haveContacts = (contacts, data) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  };

  const formSubmitHandler = data => {
    if (!haveContacts(contacts, data)) {
      setContacts([data, ...contacts]);
    } else {
      alert(`${data.name} is already exist`);
    }
  };

  const filterContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>

      <Filter
        onChange={event => {
          setFilter(event.target.value);
        }}
        value={filter}
      />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     let contacts = localStorage.getItem('contacts');
//     let parseContacts = JSON.parse(contacts);
//     if (contacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   haveContacts = (contacts, data) => {
//     return contacts.some(
//       contact => contact.name.toLowerCase() === data.name.toLowerCase()
//     );
//   };

//   formSubmitHandler = data => {
//     this.setState(({ contacts }) => {
//       if (!this.haveContacts(contacts, data)) {
//         return { contacts: [data, ...contacts] };
//       } else {
//         alert(`${data.name} is already exist`);
//       }
//     });
//   };

//   findContacts() {
//     const searching = this.state.filter.toLowerCase();
//     const findContact = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(searching)
//     );
//     return findContact;
//   }

//   filterChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />

//         <h2>Contacts</h2>

//         <Filter onChange={this.filterChange} value={this.state.filter} />
//         <ContactList
//           contacts={this.findContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
