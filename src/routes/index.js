import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'

const router = (
    
    <Routes>
        <Route exact path='/' element={<Home/>} />        
        <Route element = {<ProtectedRoutes/>}>
            <Route  path='/dashboard' element={<Dashboard/>} />
        </Route>

    </Routes>)

export default router;