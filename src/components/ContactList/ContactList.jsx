import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useGetContactsQuery } from 'redux/contactsApi';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log('data', data);

  console.log('error', error);
  console.log('isLoading', isLoading);
  // const contactItems = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);

  // const filterContacts = () => {
  //   return contactItems.filter(contactItem => {
  //     return contactItem.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {data &&
        data.map(contact => {
          return (
            <>
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.phone}
              />
            </>
            // <li key={contact.id}>
            //   {contact.name}: {contact.phone}
            // </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
