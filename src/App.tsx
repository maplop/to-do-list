import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import MainRoutes from './routes/MainRoutes';
import GlobalProvider from './providers/GlobalProvider';

function App() {


  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalProvider>
        <Container maxWidth="md">
          <MainRoutes />
        </Container>
      </GlobalProvider>
    </BrowserRouter >
  );
}

export default App;

