import React, { useEffect } from 'react'
import MovieListing from  '../movielisting/MovieListing';
import MovieApi from '../../common/apis/MovieApi';
import {APIKey} from  '../../common/apis/MovieApiKey';

const Home = () => { 
  
   useEffect(()=>{
    const movieText= "Harry";
    const fetchMovies = async () =>{
      
      const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log("Err",err); 
      });
      console.log("The response from API",response); 
      };

    fetchMovies();
   },[]);
  
  return (
    <>
    <div className='banner-img'></div>
    <MovieListing />
    </>
  );
}

export default Home