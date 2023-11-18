import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";
import { jwtDecode } from "jwt-decode";

// check token and set in userInfo
const decodedToken = (token) => {
    if (token) {
        const userInfo = jwtDecode(token);
        return userInfo
    } else {
        return ''
    }
}

const initialState = {
    loader: false,
    userInfo: decodedToken(localStorage.getItem('customerToken')),
    errorMessage: '',
    successMessage: ''
}

// seller register info and api config
export const customerRegister = createAsyncThunk(
    'auth/customerRegister',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/customer-register', info);
            localStorage.setItem('customerToken', data.token)
            console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// seller register info and api config
export const customerLogin = createAsyncThunk(
    'auth/customerLogin',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/customer-login', info);
            localStorage.setItem('customerToken', data.token)
            console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


const authReducers = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },
    extraReducers: {
        [customerRegister.pending]: (state, _) => {
            state.loader = true
        },
        [customerRegister.rejected]: (state, { payload }) => {
            state.errorMessage = payload.error
            state.loader = false
        },
        [customerRegister.fulfilled]: (state, { payload }) => {
            const userInfo = decodedToken(payload.token)
            state.userInfo = userInfo
            state.successMessage = payload.message
            state.loader = false
        },


        [customerLogin.pending]: (state, _) => {
            state.loader = true
        },
        [customerLogin.rejected]: (state, { payload }) => {
            state.errorMessage = payload.error
            state.loader = false
        },
        [customerLogin.fulfilled]: (state, { payload }) => {
            const userInfo = decodedToken(payload.token)
            state.userInfo = userInfo
            state.successMessage = payload.message
            state.loader = false
        },
    }
})

export const { messageClear } = authReducers.actions;
export default authReducers.reducer;