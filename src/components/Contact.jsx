import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import PropTypes from 'prop-types';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={css.contactWrapper}>
      <div className={css.wrapper}>
        <FaUser />
        <h3>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>

      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};



export default Contact;