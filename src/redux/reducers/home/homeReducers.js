import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const initialState = {
    categories: [],
    products: [],
    latestProducts: [],
    topRatedProducts: [],
    discountProducts: []
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

// get products
export const getProducts = createAsyncThunk(
    'products/getProducts', async (_, { fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-products')
            console.log(data)
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
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.products = payload.products
            state.latestProducts = payload.latestProducts
            state.topRatedProducts = payload.topRatedProducts
            state.discountProducts = payload.discountProducts
        }
    }
})


export default homeReducers.reducer;