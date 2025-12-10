import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
export default function Register() {
    let{register,formState:{errors},handleSubmit}=useForm()
   let navigate=useNavigate()
  const onSubmit=async(data)=>{
    try {
      let response= await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request',data)
      console.log(response);
      toast.success('enter your new password')
      navigate('/dashboard')
      
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
            <div className="col-md-7  col-lg-5 bg-white p-4 rounded-3">
               <div className="form-container">
                <div className="logo-container text-center">
                  <img className='w-25' src={logo} alt=''></img>
                </div>
                <div className='title'>
                    <h4>Register</h4>
                    <p className='text-muted'>Welcome Back! Please enter your details</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 col-lg-5">
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
       className="form-control" placeholder="userName" aria-label="user name" aria-describedby="basic-addon1"/>
      { errors.userName&& <div className='alert alert-danger p-2'>{errors.userName.message}</div>}
    </div>
                <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock" aria-hidden="true"></i></span>
      <input type="text"{...register('country',
        {
          required:'country is required',
        
          
        }
      )}
       className="form-control" placeholder="Country" aria-label="country" aria-describedby="basic-addon1"/>
      { errors.country&& <div className='alert alert-danger p-2'>{errors.country.message}</div>}
    </div>
                 <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock" aria-hidden="true"></i></span>
      <input type="password"{...register('password',
     {
      required:'password is required',
        pattern:{
      value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:'should be valid passwoed'

    }
    }
  )}
       className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1"/>
      { errors.password&& <div className='alert alert-danger p-2'>{errors.password.message}</div>}
    </div>
                    </div>
                     <div className="col-md-6 col-lg-5">
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
                <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-mobile" aria-hidden="true"></i></span>
      <input type="text"{...register('phoneNumber',
        {
          required:'phon is required',
      
          
        }
      )}
       className="form-control" placeholder="phoneNumber" aria-label="phoneNumber" aria-describedby="basic-addon1"/>
      { errors.phoneNumber&& <div className='alert alert-danger p-2'>{errors.phoneNumber.message}</div>}
    </div>
                <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-mobile" aria-hidden="true"></i></span>
      <input type="password"{...register('confirmPassword',
     {
      required:'confirmPassword is required',
        pattern:{
       validate: (value) =>
              value === password ,
      message:'dosent equal password'

    }
    }
  )}
       className="form-control" placeholder="confirm-password" aria-label="confirmPassword" aria-describedby="basic-addon1"/>
      { errors.confirmPassword&& <div className='alert alert-danger p-2'>{errors.confirmPassword.message}</div>}
    </div>
                    </div>

                  </div>
    
    
    <div className='links d-flex justify-content-end'>
  <Link to="/login" className='text-success text-decoration-none'>log in</Link>

</div>
    
    
        <button className='btn btn-submit w-100'>Register</button>
    
    </form>
               </div>
            </div>
          </div>
    
        </div>
       </div>
    </>
  )
}
