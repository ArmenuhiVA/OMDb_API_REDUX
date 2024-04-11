import { createSlice } from "@reduxjs/toolkit";

const conterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment(state) {state.value += 1},
        decrement(state) {state.value -= 1}
    }
})

 export const {increment, decrement} = conterSlice.actions
export default conterSlice.reducer