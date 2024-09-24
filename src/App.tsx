import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';
import MainRoutes from './routes/MainRoutes';
import GlobalProvider from './providers/GlobalProvider';

function App() {


  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalProvider>
        <Container maxWidth="md">
          <Box sx={{ height: "calc(100vh - 4rem)" }}>
            <MainRoutes />
          </Box>
        </Container>
      </GlobalProvider>
    </BrowserRouter >
  );
}

export default App;

