import Contact from "./Contact";
import css from "./ContactList.module.css";
import PropTypes from 'prop-types';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.listWrapper}>
      {contacts.map((contact) => {
        return (
          <Contact
            onDeleteContact={onDeleteContact}
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;