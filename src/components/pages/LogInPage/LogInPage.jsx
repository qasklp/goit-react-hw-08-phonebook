import { LogInForm } from "components/modules/LogInForm/LogInForm";
import { useDispatch } from "react-redux";

import { login } from "Redux/auth/auth-operations";

import styles from "./LogInPage.module.css";

const LogInPage = () => {
    const dispatch = useDispatch();

    const handleLogIn = (data) => {
        dispatch(login(data));
    }

    return <div className={styles.login}>
        <h1>LogIn</h1>
        <LogInForm onSubmit={handleLogIn}/>
    </div>;
}

export default LogInPage;