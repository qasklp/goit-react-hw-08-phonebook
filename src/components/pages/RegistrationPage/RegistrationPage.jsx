import { RegisterForm } from "components/modules/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";

import { signup } from "Redux/auth/auth-operations";

import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const handleRegistration = (data) => {
        dispatch(signup(data));
    }


    return <div className={styles.registration}> 
        <h1>Registration</h1>
        <RegisterForm onSubmit={handleRegistration}/>
    </div>;
}

export default RegistrationPage;