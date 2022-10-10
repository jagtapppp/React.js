import React,{useState}  from "react";
import "./Registration.css";
import { NavLink, useNavigate } from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
    const[input,setInput]= useState({
        name:"",
        email:"",
        password:"",
    });
    //localstorage
    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate("/");
        
      }
  return (
    <>
        <h2>Create an Account</h2>

      <div className="container py-5">
        <div className="card border-0 shadow p-4 w-50 mx-auto">
          <form onSubmit={handleSubmit} className="form1">
            <div className="row div_row">
              <div className="form-group">
                <div className="col-sm-6">
                  <label className="mb-2" htmlFor="formGroupExampleInput">
                    Name
                  </label>
                </div>
                <div className="col-sm-6">
                  <input name="name" value={input.name} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} type="text" id="form3Example1" class="form-control" />
                </div>
                <p className="text-danger"></p>
              </div>
            </div>

            <div className="row div_row">
              <div className="form-group">
                <div className="col-sm-6">
                  <label className="mb-2" htmlFor="formGroupExampleInput">
                    Email Address{" "}
                  </label>
                </div>
                <div className="col-sm-6">
                  <input name="email" value={input.email} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})}  type="text" id="form3Example1" class="form-control" />
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
                  <input name="password" value={input.password} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} type="password" id="form3Example1" class="form-control" />
                </div>
                <p className="text-danger"></p>
              </div>
            </div>

            <button 
              type="submit"
              className="btn btn-primary btn-block mb-4 col-8 regbtn"
            >
              Register
            </button>

            <div class="text-center">
              <p>
                Already member? <NavLink className="btn btn-primary btn-outline-light mt-4 mb-4" exact to="/">Login here</NavLink> 
                {/* <NavLink className="btn btn-primary btn-outline-light mt-4 mb-4" exact to="/">Back to home</NavLink> */}

              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
