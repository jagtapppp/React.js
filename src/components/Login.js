import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const[input,setInput]= useState({
        email:"",
        password:"",
    });

    const handleLogin = (e)=>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password)
        {
          localStorage.setItem("loggedin", true)
            navigate("/product");
        }
        else{
            alert("wrong email or password");

        }
    };
  return (  
    <>
    <h2>Login</h2>
      <div className="container py-5">
        <div className="card border-0 shadow p-4 w-50 mx-auto">
          <form onSubmit={handleLogin} className="form1">
            <div className="row div_row">
              <div className="form-group">
                <div className="col-sm-6">
                  <label className="mb-2" htmlFor="formGroupExampleInput">
                    Email Address{" "}
                  </label>
                </div>
                <div className="col-sm-6">
                  <input name="email" value={input.email} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} type="text" id="form3Example1" class="form-control" />
                </div>
                <p className="text-danger"></p>
              </div>
            </div>

            <div className="row div_row">
              <div className="form-group">
                <div className="col-sm-6">
                  <label className="mb-2" htmlFor="formGroupExampleInput">
                    Password
                  </label>
                </div>
                <div className="col-sm-6">
                  <input name="password" value={input.password} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})}  type="password" id="form3Example1" class="form-control" />
                </div>
                <p className="text-danger"></p>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 col-8 regbtn"
            >
              Sign In
            </button>

            <div class="text-center">
              <p>
                Not a member?<NavLink className="btn btn-primary btn-outline-light mt-4 mb-4" exact to="/registration">Register here</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
