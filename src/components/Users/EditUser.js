import React, { useState, useEffect } from 'react'
import './AddUser.css';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';

const EditUser = () => {

  let navigate = useNavigate();

  const {id} = useParams();

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

    const onSubmitd = async (e) => {
     e.preventDefault();
     await axios.put(`http://localhost:3007/users/${id}`,User)
    //  .then(response=>{
    //   console.log(response.data);
    //  })
    navigate('/');

     }
         useEffect(()=>{
             loadSingleUser();
         },[]);
 
         const loadSingleUser = async () =>{
             await axios.get(`http://localhost:3007/users/${id}`)
             .then ((Response)=>{
                //  console.log(Response);
                 setUser(Response.data);
             })
          }

  return (
    <>
    <form onSubmit={onSubmitd}  className='formdiv'>
  <div className="form-group mb-3">
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
  <button type="submit" className="btn btn-primary mb-2">UpdateUser</button>
  </form>
    </>
  )
}

export default EditUser