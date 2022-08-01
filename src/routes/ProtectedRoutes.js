import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutes = () => {
    let auth = localStorage.getItem('auth') //update this to be fetched from redux store
  return (
    (auth==='true')?<Outlet/>:<Navigate to='/' />
        
  )
}

export default ProtectedRoutes