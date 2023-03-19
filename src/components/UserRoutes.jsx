import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./modules/PrivateRoute/PrivateRoute";
import PublicRoute from "./modules/PublicRoute/PublicRoute";

const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));


export const UserRoutes = () => {
    return <Suspense fallback={<p>...Loading</p>}>
        <Routes>
            <Route element={<PublicRoute/>}>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<LogInPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<LogInPage />} />
        </Routes>
    </Suspense>;
}