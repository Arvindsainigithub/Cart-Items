import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CreateSlice";

export const store = configureStore({
    reducer:{
        cart:CounterSlice.reducer,
    }
})