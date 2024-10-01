import { BrowserRouter } from 'react-router-dom';
import { Container, Box, CssBaseline } from '@mui/material';
import MainRoutes from './routes/MainRoutes';
import GlobalProvider from './providers/GlobalProvider';
import { grey } from '@mui/material/colors';

function App() {


  return (
    <Box sx={{ background: grey[100] }}>
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
    </Box>
  );
}

export default App;

