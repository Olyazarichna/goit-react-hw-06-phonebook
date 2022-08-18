import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contactItems = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filterContacts = () => {
    return contactItems.filter(contactItem => {
      return contactItem.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {filterContacts().map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
