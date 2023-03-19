import styles from "./LogInForm.module.css";

import { useState } from 'react';
import PropTypes from 'prop-types';

export const LogInForm = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
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
        onSubmit({ email, password});
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
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

LogInForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}