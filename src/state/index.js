import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import filmsReducer from "./filmsSlice";
// import checkReducer from './checkSlice'




export default configureStore({
    reducer: {
       counter: counterReducer,
       films: filmsReducer,
    //    checkbox: checkReducer
    }
})

