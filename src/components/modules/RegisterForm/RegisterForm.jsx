import styles from "./RegisterForm.module.css";

import { useState } from 'react';
import PropTypes from 'prop-types';

export const RegisterForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, email, password});
        reset();
    }

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Name
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <label className={styles.label}>Email
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />
        </label>
        <label className={styles.label}>Password
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
            />
        </label>
        <button type='submit' className={styles.button}>Submit</button>
    </form>;
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}