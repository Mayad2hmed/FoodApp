import React, { useEffect } from 'react'
import headerImg from '../../../assets/images/headerImg.png'
import Header from '../../../shared/components/Header/Header'
import axios from 'axios'
import { useState } from 'react'
import NoData from '../../../shared/components/NoData/NoData'
import { useNavigate } from 'react-router-dom'
export default function CategeriesList() {
  const[categoriesList,setCategoriesList]=useState([])
  let navigate=useNavigate()
  const getAllCategories=async ()=>{
    try {
      let response=await axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
      setCategoriesList(response.data.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      
    }

  }
  useEffect(()=>{
    getAllCategories()
  },[])
  return (
    <>
          <Header title={  <h4 className="m-0"  > 
    <span className="text-white fw-bold">Categories</span>{' '}
    <span className="textSpan fw-light">Items</span>
  </h4> } description={'You can now add your items that any user can order it from the Application and you can edit'} imgUrl={headerImg}></Header>
        <div className="categories-datails d-flex justify-content-between align-items-center p-4 m-3 " >
      <div className="caption" style={{marginLeft:'220px',width:'1130px'}}>
         <h3>Categories Table Details</h3>
    
       <p>You can check all details</p>
      </div>
      <button className='btn btn-resipe text-white' onClick={()=>navigate('/dashboard/categpries-data')}>Add New Category </button>
     </div>
         
          <table className="table" style={{marginLeft:'280px',width:'1000px'}}>
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Category Name</th>
      <th scope="col">Category Creation Date</th>
      
    </tr>
   
  </thead>
  <tbody>
 {categoriesList.length>0 ? categoriesList.map(category=> 
  <tr key={category.id}>
  <th scope='row'>{category.id}</th>
  <td>{category.name}</td>
  <td>{category.creationDate}</td>
 </tr>

   
 
  
  

  ): <NoData/>}
   
</tbody>
  </table>
        </>
  )
}
