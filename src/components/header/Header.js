import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import user from "../../images/user.png";

import './Header.scss';
// import Home from '../home/Home';

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className='header'>
      <NavLink  to = "/" exact><div className='logo'>Movie App</div></NavLink>
      {/* <NavLink className='logo' exact to ="/"> Movie App </NavLink> */}
      <div className='user-image'>
        <img src ={user} alt="user" />
      </div>
     </div>
  )
}

export default Header