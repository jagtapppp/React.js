import React from 'react'
import {useForm} from 'react-hook-form';
import './Dashboard.css';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//you can make separate yup file for validations

const schema = yup.object().shape({
    firstname:yup.string().min(6).required(),
    lastname:yup.string().min(9).required(),
    email:yup.string().email().required(),
    age:yup.number().positive().integer().required(),
    password:yup.string().min(4).max(15).required(),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null])
})

function FormComp(){
  const { register,  handleSubmit,
    formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),

});

const onSubmit = (data)=>{
    console.log(data);
    reset();
  };


  return (

<div className='container py-5'>
<div className='card border-0 shadow p-4 w-50 mx-auto'>
<form onSubmit={handleSubmit(onSubmit)}>
<div className='row div_row'>
<div className="form-group">
  <div className='col-sm-6'>
    <label className="mb-2" htmlFor="formGroupExampleInput">First Name</label></div>
    <div className='col-sm-6'>
    <input  {...register('firstname',{ required: true } )} /></div>
    <p className='text-danger'>{errors.firstname?.message}</p>
  </div>
  </div>
  <div className='row div_row'>
  <div className="form-group">
  <div className='col-sm-6'>
<label className="mb-2" htmlFor="formGroupExampleInput2">Last Name</label>
</div>
<div className='col-sm-6'>
    <input {...register('lastname' , { required: true})} />
</div>
    <p className='text-danger'>{errors.lastname?.message}</p>
  </div>
  </div>

  <div className='row div_row'>
  <div className="form-group">
  <div className='col-sm-6'>
 <label className="mb-2" htmlFor="formGroupExampleInput2">Email</label>
    </div>
    <div className='col-sm-6'>
   <input {...register('email')} /></div>
    <p className='text-danger'>{errors.email?.message}</p>
 </div>
 </div>

 <div className='row div_row'>
  <div className="form-group">
  <div className='col-sm-6'>
 <label className="mb-2" htmlFor="formGroupExampleInput2">Age</label></div>
 <div className='col-sm-6'>
<input {...register('age')} /></div>
    <p className='text-danger'>{errors.age?.message}</p>
</div>
</div>
 
<div className='row div_row'>
  <div className="form-group">
  <div className='col-sm-6'>
 <label className="mb-2" htmlFor="formGroupExampleInput2">password</label></div>
 <div className='col-sm-6'>
    <input {...register('password')} /></div>
    <p className='text-danger'>{errors.password?.message}</p>
 </div>
 </div>

 <div className='row div_row'>
<div className="form-group">
<div className='col-sm-6'>
    <label className="mb-2" htmlFor="formGroupExampleInput2 ">Confirm_password</label></div>
    <div className='col-sm-6'>
    <input {...register('confirmpassword')}/></div>
    <p className='text-danger'>{errors.confirmpassword && "password should match"}</p>
  </div>
  </div>
  <div className='row div_row'>
  <div className='col-sm-6'>
 <input type="submit" />
    </div>
 </div>
</form>
</div>
</div>
) 
}

export default FormComp;
