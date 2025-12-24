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
import Dropdown from 'react-bootstrap/Dropdown';
import CategeriesData from "../CategeriesData/CategeriesData.jsx"
export default function CategeriesList() {
  const [showAddModal, setShowAddModal] = useState(false);
  const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd = () => setShowAddModal(false);
  const [categoriesList, setCategoriesList] = useState([])
  const [catId, setCatId] = useState(0)
  const [catName, setCatName] = useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (cat) => {
    setCatId(cat.id);
    setCatName(cat.name);
    setShow(true)
  }
  let navigate = useNavigate()

  const getAllCategories = async () => {
    try {
      let response = await axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      setCategoriesList(response.data.data);


    } catch (error) {
      console.log(error);

    }

  }
  const deleteCategory = async (id) => {
    try {
      let response = await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Category/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      getAllCategories()
      handleClose()


    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {
    getAllCategories()
  }, [])
  return (
    <>
      <Header title={<h4 className="m-0"  >
        <span className="text-white fw-bold">Categories</span>{' '}
        <span className="textSpan fw-light">Items</span>
      </h4>} description={'You can now add your items that any user can order it from the Application and you can edit'} imgUrl={headerRecipe}></Header>
      <div className="categories-datails d-flex justify-content-between align-items-center p-4 m-3 " >
        <div className="caption">
          <h3>Categories Table Details</h3>

          <p>You can check all details</p>
        </div>
        <button className='btn btn-resipe text-white' onClick={handleShowAdd}>Add New Category </button>
      </div>
     <CategeriesData
  show={showAddModal}
  handleClose={handleCloseAdd}
  onCategoryAdded={getAllCategories}
/>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteConfirmation deleteItem={'Category'} name={catName}></DeleteConfirmation>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => deleteCategory(catId)}>
            Delete
          </Button>

        </Modal.Footer>
      </Modal>
      <table className="table">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Creation Date</th>
            <th></th>
          </tr>

        </thead>
        <tbody>
          {categoriesList.length > 0 ? categoriesList.map(category =>
            <tr key={category.id}>
              <th scope='row'>{category.id}</th>
              <td>{category.name}</td>
              <td>{category.creationDate}</td>
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" className='border-0'>
                  <i className='fa-solid fa-ellipsis'></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <i class="fa-solid fa-eye text-success me-2"></i>

                    Veiw
                  </Dropdown.Item>
                  <Dropdown.Item >
                    <i className='fa fa-edit text-success me-2'></i>
                    Edit
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => handleShow(category)}>
                    <i className='fa fa-trash text-success me-2'></i>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </tr>






          ) : <NoData />}

        </tbody>
      </table>
    </>
  )
}
