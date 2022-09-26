import React, { useState } from 'react'
import './AddUser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  let navigate = useNavigate();

 const [User,setUser]=useState({
    name:"",
    username:"",
    email:""

  });
  const{name,username,email}=User;

  const onInputDataChange= e =>{
    console.log(e.target.value);
    setUser({...User,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) => {
     e.preventDefault();
     await axios.post('http://localhost:3007/users',User);
     navigate("/");

    }
  return (
    <>
    <form  onSubmit= {e => onSubmit(e)} className='formdiv'>
  <div className="form-group mb-3 ">
    <label className="mb-2">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name" value={name} onChange={onInputDataChange}/>
  </div>
  <div className="form-group mb-3">
    <label className="mb-2" >UserName</label>
    <input type="text" className="form-control" id="exampleInputUsername" placeholder="Username"  name="username" value={username} onChange={onInputDataChange}/>
  </div>
  <div className="form-group mb-3">
  <label for="exampleInputPassword1" className="mb-2">Email</label>
  <input type="email" className="form-control" id="exampleInputPassword1" placeholder="enter email"  name="email" value={email} onChange={onInputDataChange} />

  </div>
  <button type="submit" className="btn btn-primary mb-2">Add single User</button>
  </form>
    </>
  )
}

export default AddUser