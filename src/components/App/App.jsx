import css from "./style.module.css";
import Form from "../Form/Form";
import { nanoid } from "nanoid/non-secure";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import { useState, useEffect } from "react";



const App = () => {

  const [contacts, setContacts] = useState(() => {
    const saved = window.localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : 
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  });
  const [filter, setFilter] = useState('');

  const handlerChange = (evt) => {
    setFilter(evt.target.value);
  };
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    
    if (contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return
    }
    const newContact = { id: nanoid(), name: name.toLowerCase(), number };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (name) => {
    
    const newContacts = contacts.filter(contact => contact.name !== name);
    setContacts(newContacts);
  };

  return (
    <div className={css.appStyle}>
      <div className={css.phonebook}>
        <h1><b>Phonebook</b></h1>
        <Form addContact={addContact} />
      </div>
      <div>
        <h1><b>Contacts</b></h1>
        <Filter filter={filter} handlerChange={handlerChange} />
        <ContactsList data={contacts} filter={filter} deleteContact={deleteContact} />
      </div>
    </div>
  );
};


export default App;
