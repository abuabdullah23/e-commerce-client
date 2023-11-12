import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const initialState = {
    categories: []
}



export const getCategories = createAsyncThunk(
    'categories/getCategories', async (_, { fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-categories')
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response);

        }
    }
)


export const homeReducers = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getCategories.fulfilled]: (state, { payload }) => {
            state.categories = payload.categories
        }
    }
})



export default homeReducers.reducer;