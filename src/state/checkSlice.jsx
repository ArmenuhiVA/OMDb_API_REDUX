// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchFilms = createAsyncThunk(
//     'films/fetchFilms',
//     async function(filmName="movie", { rejectWithValue, dispatch }) {
//         try {
//             const response = await fetch(`https://www.omdbapi.com/?apikey=e9ba0ad4&s=${filmName}`)
//             //  console.log(response)
//             if(!response.ok) {
//                 throw new Error('Server Error')
//             }

//             const data = await response.json()

//             dispatch(setFilms(data.Search))
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )

// const checkSlice = createSlice({
//     name: 'checkedValue',
//     initialState: {
//         // checked: false,
//         value: ''
//     },
//     reducers: {
//         // isChecked(state) {state.checked = !state.checked},
//         appear(e) {e.target.value}
//     }
// })

//  export const {isChecked} = checkSlice.actions
// export default checkSlice.reducer