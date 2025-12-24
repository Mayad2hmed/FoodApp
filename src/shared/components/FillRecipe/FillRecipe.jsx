import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FillRecipe() {
     let navigate=useNavigate()
  return (
    <div>
       <div className="recipes-datails d-flex justify-content-between align-items-center p-4 m-3">
      <div className="caption" >
         <h3>Recipe Table Details</h3>
    
       <p>You can check all details</p>
      </div>
      <button className='btn btn-resipe text-white' onClick={()=>navigate('/dashboard/receipe-data')}>Add New Item </button>
     </div>
    </div>
  )
}
