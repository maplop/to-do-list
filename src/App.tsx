import { Fragment } from 'react/jsx-runtime'
import './App.css'
import { Box, Container, CssBaseline } from '@mui/material'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </Fragment>
  )
}

export default App
