import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "shared/services/registration-api";

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const { data: result } = await api.signup(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const data = await api.getCurrent(auth.token);
            return data;
        }
        catch ({ response }) {
            return rejectWithValue(response);
        }
    }
)