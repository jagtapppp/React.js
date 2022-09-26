
import axios from "axios";
import {Link, NavLink} from 'react-router-dom';

import React, { useEffect, useState } from "react";

const Home= () => {
  const [users,setUser]=useState([]);

  useEffect(()=>{
    console.log("ye......");
    loadUsers();
  },[]);

  const loadUsers = async ()=>{
     await axios.get("http://localhost:3007/users")
     .then((response)=>{
          setUser(response.data);

     })
  }
 //deleted single user function
  const deleteSingleUser =  async id =>{
    await axios.delete(`http://localhost:3007/users/${id}`);
    loadUsers();
  }


    return(

        <>
<table class="table border-shadow">
  <thead className="thead-dark">
    <tr >
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
   </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
      <tr key={user.id}>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
     <td>< NavLink className="btn btn-primary" to={`/view/${user.id}`}>view</NavLink> <NavLink className="btn btn-success" exact to={`/edit/${user.id}`} >Edit</NavLink> <button className="btn btn-danger" onClick={() => deleteSingleUser(user.id)}>Delete</button></td>
    </tr>

    ))}
    
  </tbody>
</table>
        </>
    )

}
export default Home;