import React, { useContext } from 'react'
import Header from '../../../shared/components/Header/Header'
import headerImg from '../../../assets/images/headerImg.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

export default function Dashboard() {
  let{loginData}=useContext(AuthContext)
  let navigate =useNavigate()

  
  return (
    <>
      <Header title={
        <div >
    <span className="text-white fw-bold">Welcome</span>{' '}
    <span className="textSpan fw-light">{loginData?.userName} !</span>
  </div>
      } description={'This is a welcoming screen for the entry of the application , you can now see the options'} imgUrl={headerImg}></Header>
     <div className="home-datails d-flex justify-content-between align-items-center p-4 m-3" >
      <div className="caption">
         <h3> <span className="text-black fw-light">Fill</span>{' '}
    <span className="text-success fw-light">the Recipes !</span></h3>
         <p>you can now fill the meals easily using the table and form , click here and sill it with the table !</p>
      </div>
      <button className='btn btn-resipe text-white' onClick={()=>navigate('/dashboard/recipes')}>Fill Recipes <i class="fa-solid fa-arrow-right"></i></button>
     </div>
    </>
  )
}
