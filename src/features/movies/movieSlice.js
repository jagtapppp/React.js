import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi';
import {APIKey} from  '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term)=>{
  // const movieText= "Harry";  

  const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
  // .catch((err)=>{
  //   console.log("Err",err); 
  // });
//  dispatch(addMovies(response.data)); 
      return response.data;   
});

//for shows api call

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term)=>{
  // const seriesText= "Friends";  

  const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`) 
      return response.data;
});


//for single movie details async action creator

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id)=>{

  const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`) 
      return response.data;
});


const initialState ={
    movies:{},  
    shows:{},  
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
  name:"movies",
  initialState,
  reducers:{
    //defining action
//     addMovies:(state, { payload })=>{
//         state.movies = payload;
//  },

 removeSelectedMovieOrShow: (state)=>{
  state.selectMovieOrShow = {};
 }
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

    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload})=> {
      console.log("Fetched successfuly !");
      return {...state, selectMovieOrShow:payload };
    },
 }, 
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export const getAllShows = (state) => state.movies.shows;

export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;



export default movieSlice.reducer;


