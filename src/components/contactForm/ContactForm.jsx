import PropTypes from 'prop-types';

import styles from './contactForm.module.css';

const ContactForm = ({ typeContactData, addContactBtn }) => {
  return (
    <div className={styles.mainContainer}>
      <h4>Name:</h4>
      <form>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={typeContactData}
        />
        <h4>Number:</h4>

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={typeContactData}
        />
      </form>
      <button className={styles.addContactBtn} onClick={addContactBtn}>
        Add contact
      </button>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  typeContactData: PropTypes.func.isRequired,
  addContactBtn: PropTypes.func.isRequired,
};
