import React, { useState, useEffect } from 'react'
import './AddUser.css';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import './ViewUser.css';


const ViewUser = () => {
    
  let navigate = useNavigate();

  const [User,setUser]=useState({
     name:"",
     username:"",
     email:""     
 });

 const { id } = useParams();

 useEffect(()=>{
    loadSingleUser();
 },[]) 

 const loadSingleUser = async () =>{
    await axios.get(`http://localhost:3007/users/${id}`)
    .then ((response)=>{
       //  console.log(Response);
        setUser(response.data);
    })
 }


  return (
<>
<div class="container viewcontainer">
<NavLink className="btn btn-primary btn-outline-light mt-4 mb-4" exact to="/">Back to home</NavLink>

<div class="card">
   <p className='display-4'> User Id:{id}</p>
<ul class="list-group list-group-flush">
    <li class="list-group-item">{User.name}</li>
    <li class="list-group-item">{User.username}</li>
    <li class="list-group-item">{User.email}</li>
 </ul>
 </div>
 </div>

</>
  )
}

export default ViewUser