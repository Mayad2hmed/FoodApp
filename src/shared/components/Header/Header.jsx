import React, { useContext } from 'react'
import headerCircles from "../../../assets/header.svg"
export default function Header({title,description,imgUrl}) {
  
  return (
  
       <header>
       
      <div className=" bg-success rounded-3 p-4 ">
        
        <div className="row">
            
         
          
            <div className="col-md-8 text-white">
                <div className=' headerCircle h-100 d-flex flex-column justify-content-center'>
                    
                <h4>{title}</h4>
                <p>{description}</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className='h-100 text-end'>
                   
                    <img className='w-75' src={imgUrl} alt="" />
                </div>
            </div>
        </div>
        </div>
        
 
      </header>
   
  )
}
