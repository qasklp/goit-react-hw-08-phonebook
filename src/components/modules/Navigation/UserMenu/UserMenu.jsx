import { useSelector, useDispatch } from 'react-redux';
import { userEmail } from 'Redux/auth/auth-selectors';

import { logout } from 'Redux/auth/auth-operations';

import styles from "./UserMenu.module.css";

const UesrMenu = () => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    const email = useSelector(userEmail);
    return <div className={styles.userMenu}>
        <p className={styles.text}>{email}</p>
        <button type='button' onClick={onLogout}>Logout</button>
    </div>;
}



export default UesrMenu;