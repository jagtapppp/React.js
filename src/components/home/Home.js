import React, { useEffect } from 'react'
import MovieListing from  '../movielisting/MovieListing';
// import MovieApi from '../../common/apis/MovieApi';
// import {APIKey} from  '../../common/apis/MovieApiKey';
import {useDispatch} from "react-redux";
import { fetchAsyncMovies,fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => { 
  // const movieText= "Harry";  
  const dispatch = useDispatch();


   useEffect(()=>{
        // const fetchMovies = async () =>{};

    //    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err)=>{
    //     console.log("Err",err); 
    //   });
    //  dispatch(addMovies(response.data));
      

      // console.log("The response from API"); 
    // fetchMovies();

    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());


   },[dispatch]);
  
  return (
    <>
    <div className='banner-img'>Home</div>
    <MovieListing />
    </>
  );
}

export default Home