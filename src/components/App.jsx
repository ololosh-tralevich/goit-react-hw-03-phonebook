import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

import styles from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  typeContactData = (ev) => {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value,
    });
  }

  addContactBtn = ({ name, number }) => {
    const clone = this.state.contacts.find(
      clone =>
        clone.name === name || clone.number === number
    );
    this.setState(prevState => {
      return clone
        ? alert(`${name} is already in your contacts`)
        : {
            contacts: [
              ...prevState.contacts,
              { id: nanoid(), name: name, number: number },
            ],
          };
    });
  }

  deleteContactBtn = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== id
        ),
      };
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contactContainer}>
          <ContactForm
            typeContactData={this.typeContactData}
            onSubmit={this.addContactBtn}
          />
        </div>

        <div className={styles.listContainer}>
          <h2>Contacts</h2>
          <Filter typeContactData={this.typeContactData} />
          <ContactList
            deleteContactBtn={this.deleteContactBtn}
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </div>
      </div>
    );
  }
}
