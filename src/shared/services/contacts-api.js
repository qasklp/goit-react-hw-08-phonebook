import instanse from "./registration-api";

export const getAllContacts = async () => {
    const { data } = await instanse.get("/contacts");
    return data;
}

export const addContact = async (data) => {
    const { data: result } = await instanse.post("/contacts", data);
    return result;
}

export const deleteContact = async (id) => {
    const { data } = await instanse.delete(`/contacts/${id}`);
    return data;
}