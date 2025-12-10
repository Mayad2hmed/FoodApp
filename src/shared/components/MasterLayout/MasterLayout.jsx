import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div className='d-flex vh-100'>
        <div className=''>
      <SideBar></SideBar>
      </div>
      <div className='w-100'>
        <Navbar></Navbar>
        <Outlet></Outlet>

      </div>
    </div>
  )
}
