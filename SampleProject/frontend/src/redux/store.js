import { configureStore } from "@reduxjs/toolkit";

import { countReducer } from "./counterSlice.js";

import userReducer from "./userSlice.js";

console.log(countReducer);

const store = configureStore({
    reducer: {
        user : userReducer,
    }
})
console.log(store);

export default store;