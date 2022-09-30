import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../moviecard/movieCard';
// import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  let renderMovies = "";

  renderMovies =
   movies.Response === "True" ? (movies.Search.map((movie,index)=>{
   return <MovieCard key = { index } data = {movie} />;
  })
  ):(<div className="movies-error"><h3>{movies.Error}</h3></div>
  );
  return (
    // <div>MovieListing</div>
    <>
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2 className='movies_data'>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
    </>
  )
}

export default MovieListing 