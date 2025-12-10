import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
export default function ForgetPass() {
   let{register,formState:{errors},handleSubmit}=useForm()
   let navigate=useNavigate()
  const onSubmit=async(data)=>{
    try {
      let response= await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request',data)
      console.log(response);
      toast.success('enter your new password')
      navigate('/reset-pass')
      
    } catch (error) {
      toast.error(error.response.data.message,{
        position:'top-center',
        autoClose:4000,
        theme:'colored'
      });
      
    }
  }
  return (
    <>
      <div className="auth-container ">
    <div className="container-fluid bg-overlay">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-7 col-lg-5 bg-white p-4 rounded-3">
           <div className="form-container">
            <div className="logo-container text-center">
              <img className='w-25' src={logo} alt=''></img>
            </div>
            <div className='title'>
                <h4>Forgot Your Password?</h4>
                <p className='text-muted'>No worries! Please enter your email and we will send a password reset link</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-mobile" aria-hidden="true"></i></span>
  <input type="text"{...register('email',
    {
      required:'email is required',
    pattern:{
      value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message:'should be valid mail'

    }
      
    }
  )}
   className="form-control" placeholder="Enter Your Email" aria-label="email" aria-describedby="basic-addon1"/>
  { errors.email&& <div className='alert alert-danger p-2'>{errors.email.message}</div>}
</div>


    <button className='btn btn-submit w-100'>Submit</button>

</form>
           </div>
        </div>
      </div>

    </div>
   </div>
    </>
  )
}
