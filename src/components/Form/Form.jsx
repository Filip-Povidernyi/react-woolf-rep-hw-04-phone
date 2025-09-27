import React, { useState } from "react";
import css from "../App/style.module.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";



const Form = ({ addContact }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handlerChange = (evt) => {
        const { name, value } = evt.target;
        name === 'number' ? setNumber(value) : setName(value);
    };

    const handlerSubmit = (evt) => {
        evt.preventDefault();
        
        addContact(name, number);
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handlerSubmit}
            className={css.inputContainer}>
            <label className={css.inputBtn}>
            Name
                <Input
                    change={handlerChange}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required={true}
                />
            </label>
            <label className={css.inputBtn}>
            Number
                <Input
                    change={handlerChange}
                    type="tel"
                    name="number"
                    placeholder="Phone number"
                    value={number}
                    pattern="\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required={true}
                />
            </label>
            <Button type="submit" class={css.btn}>Add contact</Button>
        </form>
    )
};


export default Form;