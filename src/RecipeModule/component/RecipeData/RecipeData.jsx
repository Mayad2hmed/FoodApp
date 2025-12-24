import React , { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

import FillRecipe from '../../../shared/components/FillRecipe/FillRecipe'
import uploadImg from '../../../assets/images/upload.png'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
export default function RecipeData() {
  const { id } = useParams();
  let navigate=useNavigate()
  const[categoriesList,setCategoriesList]=useState([])
    const[tagsList,setTagsList]=useState([])
     let{register,formState:{errors},handleSubmit,setValue}=useForm()
  
const appendToFormData=(data)=>{
  const formData=new FormData()
  formData.append('name',data.name)
  formData.append('price',data.price)
  formData.append('description',data.description)
  formData.append('tagId',data.tagId)
    formData.append('categoriesIds',data.categoriesIds)
  formData.append('recipeImage', data.recipeImage[0]);
  return formData
}
 const onSubmit = async (data) => {
  let recipeData = appendToFormData(data);

  try {
    if (id) {
      
     let response= await axios.put(
        `https://upskilling-egypt.com:3006/api/v1/Recipe/${id}`,
        recipeData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      toast.success('Recipe Updated Successfully');
           setTimeout(() => {
    navigate('/dashboard/recipes');
  }, 800);
    } else {
     
      let response=await axios.post(
        'https://upskilling-egypt.com:3006/api/v1/Recipe/',
        recipeData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type':'multipart/form-data' } }
        
      );
      toast.success('Recipe Added Successfully');
   

    }

  
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};

  
  
 const getAllCategories=async ()=>{
    try {
      let response=await axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
      setCategoriesList(response.data.data);
     
      
    } catch (error) {
      console.log(error);
      
    }

  }
  const getAllTags=async ()=>{
    try {
      let response=await axios.get( 'https://upskilling-egypt.com:3006/api/v1/tag/',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
setTagsList(response.data);
     
      
    } catch (error) {
      console.log(error);
      
    }

  }
  const updateRecipeById = async () => {
  try {
    let response = await axios.get(
      `https://upskilling-egypt.com:3006/api/v1/Recipe/${id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type':'multipart/form-data' } }
    );

    
    const recipe =  response.data.data || response.data;;

setValue('name', recipe.name);
setValue('price', recipe.price);
setValue('description', recipe.description);
setValue('tagId', recipe.tag?.id);
setValue('categoriesIds', recipe.category?.[0]?.id)

  } catch (error) {
    console.log(error);
  }
};

    useEffect(()=>{
    getAllCategories()
    getAllTags()
    if (id) {
    updateRecipeById();
  }
  
  },[id])
  return (
    <div>
     
         <div className="recipes-datails d-flex justify-content-between align-items-center p-4 m-3">
      <div className="caption" >
         <h3>
  {id ? (
    <>
      Edit the <span className="text-success">Recipe</span> !
    </>
  ) : (
    <>
      Fill the <span className="text-success">Recipes</span> !
    </>
  )}
</h3>
    
       <p>You can check all details</p>
      </div>
      <button className='btn btn-resipe text-white' onClick={()=>navigate('/dashboard/recipes')}>All Recipes</button>
     </div>
       <form className='w-75 p-5 m-auto' onSubmit={handleSubmit(onSubmit)}>
          
    <input type="text"

     className="form-control"{...register('name',
    {
      required:'field is required',
   
    }
  )}
      placeholder="Recipe Name" aria-label="name" aria-describedby="basic-addon1"/>
        { errors.name&& <div className='alert alert-danger p-2'>{errors.name.message}</div>}

<select className='form-control my-2'{...register('tagId',
    {
      required:'field is required',
   
    }
  )}> <option value="">choose</option>
   
  {tagsList.map(tag=><option key={tag.id} value={tag.id}>{tag.name}</option>)}
</select>
  { errors.tagId&& <div className='alert alert-danger p-2'>{errors.tagId.message}</div>}


<input className='form-control my-2'{...register('price',
    {
      required:'field is required',
   
    }
  )}
 placeholder="Recipe Price" aria-label="name" aria-describedby="basic-addon1"/>
   { errors.price&& <div className='alert alert-danger p-2'>{errors.price.message}</div>}

<select className='form-control my-2'{...register('categoriesIds',
    {
      required:'field is required',
   
    }
  )}>
    <option value="">choose</option>
   {categoriesList.map(cat=><option key={cat.id} value={cat.id}>{cat.name}</option>)}
</select>
  { errors.categoriesIds&& <div className='alert alert-danger p-2'>{errors.categoriesIds.message}</div>}


<textarea  className='form-control my-2'{...register('description',
    {
      required:'field is required',
   
    }
  )}
 placeholder="Description*"/>
   { errors.description&& <div className='alert alert-danger p-2'>{errors.description.message}</div>}

<div className="mb-3">
 

  <div className=" border border-success  border-dashed rounded p-4 text-center " style={{cursor:"pointer"}}>
    <input type="file" id="upload" hidden {...register('recipeImage',
    {
      required:'field is required',
   
    }
  )} />
    <label htmlFor="upload" className="fw-semibold d-block">
      <div>
        <img src={uploadImg}></img>
      </div>
      Drag & Drop or<span className="textUpload">Choose a Item Image</span>  to Upload
    </label>
  </div>
</div>
<div className="btns d-flex justify-content-end my-3">
<button
  type="submit"
  className="btn btn-success mx-2"
 
>
  {id ? 'Update' : 'Save'}
</button>
<button type='button' className="btn btn-outline-sucess mx-2"onClick={()=>navigate('/dashboard/recipes')} >Cancel</button>
</div>
       </form>
    </div>
  )
}
