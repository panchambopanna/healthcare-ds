import {React} from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';



const ProtectedRoutes = () => {

  const isAuth = useSelector(state=>state.auth.isAuth)
  const location = useLocation();
    
  return (
    isAuth?<Outlet/>:<Navigate to='/' state = {{from: location}} replace/>
        
  )
}

export default ProtectedRoutes;