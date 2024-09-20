// TODO Step 1
import { createSlice } from "@reduxjs/toolkit";

// TODO Step 2
const counterSlice = createSlice({
    name: 'count',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        }
    }
});
console.log(counterSlice);
export const { increment } = counterSlice.actions;
export const countReducer =  counterSlice.reducer;