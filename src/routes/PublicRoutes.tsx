import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/login' index element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}
export default PublicRoutes