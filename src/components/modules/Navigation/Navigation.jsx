//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from "./Navigation.module.css";

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UesrMenu from './UserMenu/UserMenu';

import { isUserLogin } from 'Redux/auth/auth-selectors';


const Navigation = () => {
    const isLogin = useSelector(isUserLogin);
    return (
        <ul className={styles.menu}>
            {isLogin && <li><NavLink to="/contacts" className={styles.link}>Contacts</NavLink></li>}
            <li className={styles.authItem}>
                {!isLogin && <NavbarAuth />}
                {isLogin && <UesrMenu email='sac' />}
            </li>

        </ul>
    );
}

export default Navigation;