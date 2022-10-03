import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi';
import {APIKey} from  '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=>{
  const movieText= "Harry";  

  const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
  // .catch((err)=>{
  //   console.log("Err",err); 
  // });
//  dispatch(addMovies(response.data)); 
      return response.data;
})

//for shows api call

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async ()=>{
  const seriesText= "Friends";  

  const response = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`) 
      return response.data;
})

const initialState ={
    movies:{},  
    shows:{},  
}

const movieSlice = createSlice({
  name:"movies",
  initialState,
  reducers:{
    //defining action
    addMovies:(state, { payload })=>{
        state.movies = payload;

    },
  },
  extraReducers:{
    [fetchAsyncMovies.pending]: ()=> {
      console.log("pending");
    },
   
    [fetchAsyncMovies.fulfilled]: (state, {payload})=> {
      console.log("Fetched successfuly !");
      return {...state, movies:payload };
    },

    [fetchAsyncMovies.rejected]: ()=> {
      console.log("Rejected !");
    },

    [fetchAsyncShows.fulfilled]: (state, {payload})=> {
      console.log("Fetched successfuly !");
      return {...state, shows:payload };
    },
 }, 
});

export const {addMovies} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies

export const getAllShows = (state) => state.movies.shows


export default movieSlice.reducer;


