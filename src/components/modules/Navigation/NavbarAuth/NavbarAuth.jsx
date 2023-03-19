import { NavLink } from "react-router-dom";
import styles from "./NavbarAuth.module.css";

const NavbarAuth = () => {
    return <div>
        <NavLink to="/register" className={styles.link}>Registration</NavLink> | <NavLink to="/login" className={styles.link}>LogIn</NavLink>
    </div>
}

export default NavbarAuth;