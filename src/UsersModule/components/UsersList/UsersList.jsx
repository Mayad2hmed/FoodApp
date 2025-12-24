import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../../shared/components/Header/Header';
import headerUser from '../../../assets/images/header-recipe.png'
import NoData from '../../../shared/components/NoData/NoData';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify'

export default function UsersList() {
  const [usersList, setUsersList] = useState([])

  const getAllUsers = async () => {
    try {
      let response = await axios.get('https://upskilling-egypt.com:3006/api/v1/Users/?pageSize=20&pageNumber=1', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      setUsersList(response.data.data);
      
     

    } catch (error) {
          toast.error(error.response?.data?.message);
      
      

    }

  }
   const deleteUser=async (id)=>{
    try {
      let response=await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Users/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    getAllUsers()
         toast.success('user deleted Successfully');
    
      
      
    } catch (error) {
          toast.error(error.response?.data?.message);
      
      
    }}
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <>
      <Header title={<h4 className="m-0"  >
        <span className="text-white fw-bold">Users</span>{' '}
        <span className="textSpan fw-light">List</span>
      </h4>} description={'You can now add your items that any user can order it from the Application and you can edit'} imgUrl={headerUser}></Header>
      <div className="categories-datails d-flex justify-content-between align-items-center p-4 m-3 " >
        <div className="caption">
          <h3>Users Table Details</h3>

          <p>You can check all details</p>
        </div>
      </div>




      <table className="table">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Creation Date</th>
            <th scope="col">Email</th>

            <th scope="col">Role</th>

            <th scope="col">Action</th>

            <th></th>
          </tr>

        </thead>
        <tbody>
          {usersList.length > 0 ? usersList.map(user =>
            <tr key={user.id}>
              <th scope='row'>{user.id}</th>
              <td>{user.userName}</td>
              <td>{user.creationDate}</td>
              <td>{user.email}</td>
              <td>{user.group.name}</td>
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" className='border-0'>
                  <i className='fa-solid fa-ellipsis'></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <i class="fa-solid fa-eye text-success me-2"></i>

                    Veiw
                  </Dropdown.Item>
                 

                  <Dropdown.Item  onClick={() =>deleteUser(user.id)}>
                    <i className='fa fa-trash text-success me-2' ></i>
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
