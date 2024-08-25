import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name :"movies",
    initialState:{
        nowPlayingMovies : null,
        nowPlayingTrailer : null,
        popularMovies :null,
        upcomingMovies : null,
        topratedMovies : null
    },
    reducers :{
        addNowPlayingMovies :(state,action)=>{
        state.nowPlayingMovies = action.payload
        },
        addTrailervideo : (state,action)=>{
        state.nowPlayingTrailer = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addUpcomingMovies :(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addTopratedMovies :(state,action)=>{
            state.topratedMovies = action.payload
        },
    }
})
export const {addNowPlayingMovies, addTrailervideo,addPopularMovies,addUpcomingMovies,addTopratedMovies} =movieSlice.actions
export default movieSlice.reducer;