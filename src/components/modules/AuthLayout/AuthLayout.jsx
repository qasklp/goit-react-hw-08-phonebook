import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { current } from "Redux/auth/auth-operations";

export const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, [dispatch]);
    return (<>
        {children}
    </>);
}