import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies , getAllShows} from '../../features/movies/movieSlice'
import MovieCard from '../moviecard/movieCard';
import './MovieListing.scss';

// import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const shows = useSelector(getAllShows);

  console.log(movies);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
   movies.Response === "True" ? (movies.Search.map((movie,index)=>{
   return <MovieCard key = { index } data = {movie} />;
  })
  ):(<div className="movies-error"><h3>{movies.Error}</h3></div>
  );

  // for shows

  renderShows =
  shows.Response === "True" ? (shows.Search.map((shows,index)=>{
  return <MovieCard key = { index } data = {shows} />;
 })
 ):(<div className="movies-error"><h3>{shows.Error}</h3></div>
 );

  return (
    // <div>MovieListing</div>
    <>
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2 className='movies_data'>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>

      <div className="show-list">
        <h2 className='shows_data'>Shows</h2>
        <div className='movie-container'>{renderShows}</div>
      </div>

    </div>
    </>
  )
}

export default MovieListing 