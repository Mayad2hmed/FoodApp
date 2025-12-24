import React from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'
export default function Navbar() {
   let{loginData}=useContext(AuthContext)
  
   
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                <a className="nav-link active border rounded-circle p-3 bg-danger " aria-current="page" href="#">{loginData?.imagePath}</a>

        <a className="nav-link active" aria-current="page" href="#">{loginData?.userName}</a>
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
