import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Notes from '../pages/NotesPage'
import Profile from '../pages/ProfilePage'
import Categories from '../pages/CategoriesPage'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='/notes' />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  )
}
export default PrivateRoutes