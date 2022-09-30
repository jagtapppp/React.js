import React from 'react'
import "./movieCard.scss";
import harry from "../../images/harry.jfif";


const MovieCard = (props) => {
  const {data} = props;   
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src="/harry.jfif" alt={data.Title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}   

export default MovieCard