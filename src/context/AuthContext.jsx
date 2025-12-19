import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
export let AuthContext=createContext()
export default function AuthContextProvider({children}) {
const [loginData,setLoginData]=useState(null)

let saveLogingData=()=>{
    let endecodeToken=localStorage.getItem('token')
    let decodeToken=jwtDecode(endecodeToken)
    setLoginData(decodeToken)
}
let logout=()=>{
    localStorage.removeItem('token')
    
    setLoginData(null)
}

useEffect(()=>{
    if(localStorage.getItem('token')){
        saveLogingData()
    }
},[])
  return (
    <>
      <AuthContext.Provider
        value={{loginData,saveLogingData,logout}}>
            {children}
      </AuthContext.Provider>
      </>
   
  )
}
