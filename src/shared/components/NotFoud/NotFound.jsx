import React from "react";
import notFound from "../../../assets/images/notFound.png"
import logo from '../../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate=useNavigate()
  return (
    <>
    <div>
<img
          
            src={logo}
            alt="404"
           className="w-25"
          />
    </div>
    <div className="container-fluid  px-5  d-flex  align-items-center justify-content-start bg-light">
      
      <div

        className=""
        style={{ maxWidth: "650px", borderRadius: "20px" }}
      >

        <h1 className="fw-bold text-dark display-4">Oops.</h1>

        <h5 className="text-success mb-3">Page not found</h5>

        <p className="text-secondary mb-4">
          This page doesn’t exist or was removed.
          <br />
          We suggest you go back to home.
        </p>
        <div className="d-flex justify-content-start">
          <button className="btn btn-success px-4 py-2 rounded-pill" onClick={()=>{
            navigate('/login')
          }}>
            Back to Home
          </button>
        </div>

        
        <div className="notfound-bg ">
          <svg width="900" height="600" viewBox="0 0 900 845" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89282 521.082C26.9982 403.162 133.04 300.297 258.07 290.462C326.208 285.176 394.696 305.682 462.554 297.855C520.065 290.999 572.986 264.358 611.405 222.921C667.457 162.038 686.409 81.9082 745.754 23.9688C827.519 -55.9487 970.205 -57.1864 1069.7 1.58928C1169.19 60.365 1229.34 159.964 1256.87 268.517L1257.96 301.534C1263.95 414.135 1232.91 545.167 1164.49 645.524C1095.17 747.219 1049.59 789.369 923.262 862.329C815.993 924.416 605.94 951.713 480.525 954.59C355.11 957.467 226.296 921.807 131.954 842.793C37.6127 763.778 -17.2476 639.001 4.89282 521.082Z" fill="#CCE9DA"/>
<path d="M413.64 193.407C410.096 170.068 427.014 148.402 451.429 145.014C475.843 141.626 498.508 157.799 502.053 181.137C505.597 204.476 488.678 226.142 464.264 229.53C439.849 232.918 417.184 216.745 413.64 193.407Z" fill="#CCE9DA"/>
</svg>

          <img
          
            src={notFound}
            alt="404"
            className="notFound"
             style={{
    maxWidth: "460px",
   
    position: "fixed",
    bottom: "20px",
    right: "20px"
  }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
