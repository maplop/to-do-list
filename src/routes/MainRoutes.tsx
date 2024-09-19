import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { useAuth } from '../hooks/useAuth'

const MainRoutes = () => {
  const { isAuthenticated } = useAuth()
  return (
    <Routes>
      {
        isAuthenticated
          ? <Route path="/*" element={<PrivateRoutes />} />
          : <Route path="/*" element={<PublicRoutes />} />
      }
    </Routes>
  )
}
export default MainRoutes