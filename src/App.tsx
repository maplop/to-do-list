import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

type Status = 'checking' | 'authenticated' | 'no-authenticated'

const status: Status = 'authenticated'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
          <Routes>
            {
              status === 'authenticated'
                ? <Route path="/*" element={<PrivateRoutes />} />
                : <Route path="/*" element={<PublicRoutes />} />
            }
            <Route path='*' element={<Navigate to='/login' replace />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;

