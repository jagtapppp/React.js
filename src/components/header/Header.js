import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink,useNavigate } from 'react-router-dom'
import user from "../../images/user.png";
import {fetchAsyncMovies,fetchAsyncShows} from '../../features/movies/movieSlice';

import './Header.scss';
// import Home from '../home/Home'; 

const Header = () => {
  let navigate = useNavigate();

  const [term,setTerm]= useState("");

  const dispatch = useDispatch();

  const submitHandler = (e)=>{
    e.preventDefault();
    if(term === ""){
  return alert("Please enter search Term!");
    }
    console.log(term);
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");

  }

  return (
    <div className='header'>
    <div className='logo'>
      <NavLink  to = "/" exact>Movie App</NavLink>
      </div>
      
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type="text" className='input1' value={term} placeholder="search movies or shows" onChange={(e)=>setTerm(e.currentTarget.value)} />
          <button type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>

      {/* <NavLink className='logo' exact to ="/"> Movie App </NavLink> */}
      <div className='user-image'>
        <img src = {user} alt="user" />
      </div>
     </div>
  )
}

export default Header