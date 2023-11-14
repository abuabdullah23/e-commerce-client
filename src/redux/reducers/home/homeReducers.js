import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

const initialState = {
    categories: [],
    products: [],
    totalProducts: 0,
    latestProducts: [],
    topRatedProducts: [],
    discountProducts: [],
    priceRange: {
        low: 0,
        high: 100
    },
    perPage: 4
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
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response);
        }
    }
)

// get Price Range Products
export const getPriceRangeProducts = createAsyncThunk(
    'products/getPriceRangeProducts', async (_, { fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-price-range-latest-products')
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response);
        }
    }
)

// get Products by query
export const getQueryProducts = createAsyncThunk(
    'products/getQueryProducts',
    async ({ category, low, high, ratingRange, pageNumber, sortPrice }, { fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-query-products?category=${category}&lowPrice=${low}&highPrice=${high}&rating=${ratingRange}&pageNumber=${pageNumber}&sortPrice=${sortPrice}`)
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
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.products = payload.products
            state.latestProducts = payload.latestProducts
            state.topRatedProducts = payload.topRatedProducts
            state.discountProducts = payload.discountProducts
        },
        [getPriceRangeProducts.fulfilled]: (state, { payload }) => {
            state.latestProducts = payload.latestProducts
            state.priceRange = payload.priceRange
        },
        [getQueryProducts.fulfilled]: (state, { payload }) => {
            state.products = payload.products
            state.totalProducts = payload.totalProducts
            state.perPage = payload.perPage
        }
    }
})


export default homeReducers.reducer;