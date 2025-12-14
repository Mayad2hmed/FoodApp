import React, { useEffect } from 'react'
import headerImg from '../../../assets/images/headerImg.png'
import Header from '../../../shared/components/Header/Header'
import axios from 'axios'
import { useState } from 'react'
import NoData from '../../../shared/components/NoData/NoData'
import { useNavigate } from 'react-router-dom'

export default function RecipeList() {
  let navigate=useNavigate()
  const [RecipesList, setRecipesList] = useState([])
  const getAllRecipes = async () => {
    try {
      let response = await axios.get('https://upskilling-egypt.com:3006/api/v1/Recipe/?pageSize=10&pageNumber=1', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      setRecipesList(response.data.data);
      

    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    getAllRecipes()
  }, [])
  return (
    <div>
      <Header title={
          <h4 className="m-0">
    <span className="text-white fw-bold">Recipes</span>{' '}
    <span className="textSpan fw-light">Items !</span>
  </h4>}
       description={'You can now add your items that any user can order it from the Application and you can edit'} imgUrl={headerImg}></Header>
  <div className="recipes-datails d-flex justify-content-between align-items-center p-4 m-3">
      <div className="caption" style={{marginLeft:'220px',width:'1130px'}}>
         <h3>Recipe Table Details</h3>
    
       <p>You can check all details</p>
      </div>
      <button className='btn btn-resipe text-white' onClick={()=>navigate('/dashboard/receipe-data')}>Add New Item </button>
     </div>
      
        <table className="table" style={{marginLeft:'280px',width:'1000px'}}>
          <thead>
            <tr>
             
              <th scope="col">Item Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Discount</th>
              <th scope="col">Category</th>

            </tr>
          </thead>
          <tbody>
{RecipesList.length > 0 ? RecipesList.map(recipe =>
            <tr key={recipe.id}>
              <th scope='row' className='w-50'>{recipe.name}</th>
              <td><img className='w-50' src={`https://upskilling-egypt.com:3006/${recipe.imagePath}`}></img></td>
              <td>{recipe.price}</td>
              <td>{recipe.description}</td>
              <td>20</td>
              <td>{recipe.category[0].name}<i className='fa-solid fa-ellipsis'></i></td>
              
              
            </tr>


      
      ) : <NoData />}
          </tbody>
        </table>
    </div>
    
  )
}
