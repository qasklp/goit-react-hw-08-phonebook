import axios from "axios";

const instanse = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
})

const setToken = token => {
    if (token) {
        return instanse.defaults.headers.authorization = `Bearer ${token}`;
    }
    instanse.defaults.headers.authorization = "";
}

export const signup = async (data) => {
    const { data: result } = await instanse.post("/users/signup", data);
    instanse.defaults.headers.authorization = `Bearer ${result.token}`;
    return result;
}

export const login = async (data) => {
    const { data: result } = await instanse.post("/users/login", data);
    instanse.defaults.headers.authorization = `Bearer ${result.token}`;
    return result;
}

export const logout = async () => {
    const { data } = await instanse.post("/users/logout");
    setToken();
    return data;
}

export const getCurrent = async (token) => {
    try {
        setToken(token);
        const { data } = await instanse.get("/users/current");
        return data;

    } catch (error) {
        setToken();
        throw error;
    }
}

export default instanse;