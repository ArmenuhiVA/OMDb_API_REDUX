import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async function({filmName="avengers", type="movie"}, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=e9ba0ad4&s=${filmName}&type=${type}`)
            if(!response.ok) {
                throw new Error('Server Error')
            }

            const data = await response.json()

            dispatch(setFilms(data.Search))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        films: [],
        value: ''
    },
    reducers: {
        setFilms(state, action) {
           state.films = action.payload
        //    console.log(state.films)
        },
        setValue(state, action) {
            state.value = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchFilms.fulfilled, (state, action) => {
    //             state.films = action.payload;
    //         })
    //         .addCase(fetchFilms.rejected, (state, action) => {
    //             // Handle error state if needed
    //         });
    // }
})

 export const { setFilms, setValue } = filmsSlice.actions
export default filmsSlice.reducer