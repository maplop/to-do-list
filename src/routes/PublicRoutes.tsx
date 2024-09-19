import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/login' index element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}
export default PublicRoutes