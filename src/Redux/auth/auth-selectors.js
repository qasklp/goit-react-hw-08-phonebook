export const isUserLogin = ({ auth }) => auth.isLogin;
export const userEmail = ({ auth }) => auth.user.email;
export const getAuth = ({ auth }) => {
    const { isLogin, token } = auth;
    return { isLogin, token };
}