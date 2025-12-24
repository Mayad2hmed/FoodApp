import React, { useEffect } from 'react'
import headerRecipe from '../../../assets/images/header-recipe.png'
import Header from '../../../shared/components/Header/Header'
import axios from 'axios'
import { useState } from 'react'
import NoData from '../../../shared/components/NoData/NoData'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirmation from '../../../shared/components/DeleteConfirmation/DeleteConfirmation'
import FillRecipe from '../../../shared/components/FillRecipe/FillRecipe'
import Dropdown from 'react-bootstrap/Dropdown';
export default function RecipeList() {
  let navigate=useNavigate()
    const[recipeId,setRecipeId]=useState(0)
    const[recipeName,setRecipeName]=useState('')
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = (recipe) =>{
      setRecipeId(recipe.id);
      setRecipeName(recipe.name);
      setShow(true)
    }
 
  const [RecipesList, setRecipesList] = useState([])
  const getAllRecipes = async () => {
    try {
      let response = await axios.get('https://upskilling-egypt.com:3006/api/v1/Recipe/?pageSize=10&pageNumber=1', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
     console.log(response);
      setRecipesList(response.data.data);
      
      
      

    } catch (error) {
      console.log(error);

    }

  }
    const deleteRecipe=async (id)=>{
    try {
      let response=await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Recipe/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    getAllRecipes()
    handleClose()
      
      
    } catch (error) {
      console.log(error);
      
    }}
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
       description={'You can now add your items that any user can order it from the Application and you can edit'} imgUrl={headerRecipe}></Header>
 <FillRecipe></FillRecipe>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteConfirmation deleteItem={'Recipe'} name={recipeName}></DeleteConfirmation>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={()=>deleteRecipe(recipeId)}>
            Delete
          </Button>
          
        </Modal.Footer>
      </Modal>
      
        <table className="table">
          <thead>
            <tr>
             
              <th scope="col">Item Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Discount</th>
              <th scope="col">Category</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
{RecipesList.length > 0 ? RecipesList.map(recipe =>


            <tr key={recipe.id}>
              
              <th scope='row' className='w-50'>{recipe.name}</th>
              <td><img className='w-25' src={`https://upskilling-egypt.com:3006/${recipe.imagePath}`}></img></td>
              
              <td>{recipe.price}</td>
              <td>{recipe.description}</td>
              <td>20</td>
              <td>{recipe.category[0]?.name}</td>
               <td>
   
    <Dropdown align="end">
    <Dropdown.Toggle variant="light" className='border-0'>
      <i className='fa-solid fa-ellipsis'></i>
    </Dropdown.Toggle>

    <Dropdown.Menu>
         <Dropdown.Item>
          <i class="fa-solid fa-eye text-success me-2"></i>
        
      Veiw
      </Dropdown.Item>
      <Dropdown.Item  onClick={() =>{console.log('EDIT CLICKED', recipe.id);navigate(`/dashboard/recipes/edit/${recipe.id}`)}}>
        <i className='fa fa-edit text-success me-2'></i>
        Edit
      </Dropdown.Item>

      <Dropdown.Item onClick={()=>handleShow(recipe)}>
        <i className='fa fa-trash text-success me-2'></i>
        Delete
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </td>
              
              
            </tr>


      
      ) : <NoData />}
          </tbody>
        </table>
    </div>
    
  )
}
