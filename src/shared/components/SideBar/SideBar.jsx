import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logoSidebar from '../../../assets/images/logo-sidebar.png'
export default function SideBar() {
  const[isCollapsed,setIsCollapsed]=useState(false)
  const toggleCollapse=()=>{
    setIsCollapsed(!isCollapsed)
  }
  return (
    <>

     <div className="sidebar-container ">
       <Sidebar className='' collapsed={isCollapsed}
        >
        <Menu>
          <div className='img text-center py-4'>
          <img className='w-75' onClick={toggleCollapse} src={logoSidebar} alt=''></img>
          </div>
          <MenuItem component={<Link to="/dashboard" />} icon={<i className="fa-regular fa-house"></i>}> Home</MenuItem>
          <MenuItem component={<Link to="/dashboard/users" />} icon={<i className="fa-solid fa-users"></i>}> Users </MenuItem>
          <MenuItem component={<Link to="/dashboard/recipes" />} icon={<i className="fa-solid fa-table"></i>}> Recipe </MenuItem>
          <MenuItem component={<Link to="/dashboard/categories" />} icon={<i className="fa-regular fa-calendar-days"></i>}> Categories </MenuItem>
          <MenuItem component={<Link to="/change-pass" />}icon={<i className="fa-solid fa-unlock-keyhole"></i>}> Change Password </MenuItem>
          <MenuItem component={<Link to="/login" />} icon={<i className="fa-solid fa-right-from-bracket"></i>}> Logout </MenuItem>

        </Menu>
      </Sidebar>
     </div>
     

    </>
  )
}
