// import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';

const Contact = contact => {
  const [deleteContact, result] = useDeleteContactMutation();
  console.log('id', contact.id);

  return (
    <li className={css.listItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={() => deleteContact(contact.id)}
        className={css.bthList}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

// Contact.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
