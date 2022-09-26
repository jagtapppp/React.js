import React, { Children, useState } from 'react'
// import Dashboard from '../pages/Dashboard'
import {FaTh, FaBars,FaClipboardList ,FaUserAlt, FaShoppingBag  } from  "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const[isOpen, setIsOpen]= useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen); 
  }
    const menuItem=[
        {
            path:'/',
            name:"Dashboard",
            icon:<FaTh/>
         },
    {
        path:"/about",
        name:"About",
        icon:< FaUserAlt/>

    },
    {
        path:"/product",
        name:"Product",
        icon:< FaShoppingBag/>
    },
    {
      path:"/productlist",
      name:"Productlist",
      icon:< FaClipboardList/>
  }

]
  return ( 
<div className='sidebar_css'>
  <div style ={{ width:isOpen ?  "200px" : "50px" }} className='sidebar'>
    <div className='top_section'>
    <h1 style ={{ display:isOpen ?  "block" : "none" }} className='logo'>Logo</h1>
    <div style ={{ marginLeft:isOpen ? "50px" : "0px" }} className='bars'>
    <FaBars onClick={toggle}/>
    </div>
  </div>
  {
    menuItem.map((item,index)=>(
    <NavLink to = {item.path} key={index} className="mylink ">
      <div className='myicon'>{item.icon}  </div>
       <div className='link_text'>{item.name}</div> 
    </NavLink>)
  ) }
</div> 
{/* <main>{children}</main> */}

</div>
  )
}

export default Sidebar