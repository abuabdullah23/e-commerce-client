import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/rootReducers";

const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: getDefaultMiddleware=> {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export default store;