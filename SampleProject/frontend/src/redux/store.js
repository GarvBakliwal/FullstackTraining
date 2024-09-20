import { configureStore } from "@reduxjs/toolkit";

import { countReducer } from "./counterSlice.js";

console.log(countReducer);

const store = configureStore({
    reducer: {
        count: countReducer
    }
})
console.log(store);

export default store;