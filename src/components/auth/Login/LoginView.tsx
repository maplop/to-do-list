import { Person, Lock, VisibilityOff, Visibility } from "@mui/icons-material"
import { Paper, Box, Stack, Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useLogin } from "./useLogin"

const LoginView = () => {

  const { formValues,
    handleInputChange,
    passwordVisibility,
    changePasswordVisibility,
    handleSubmit } = useLogin()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <Box sx={{ display: 'flex', height: '100%', }}>
      <Paper elevation={3} sx={{ width: 400, margin: 'auto', p: 5 }} >
        <Box sx={{ pb: 1 }} >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>Login</Typography>
        </Box>
        <form onSubmit={onSubmit}>
          <Stack spacing={3}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                required
                label="User"
                name='user'
                value={formValues.user}
                onChange={handleInputChange}
                variant="standard"
                fullWidth />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <FormControl variant="standard" required fullWidth >
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  name='password'
                  value={formValues.password}
                  onChange={handleInputChange}
                  type={passwordVisibility ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={changePasswordVisibility}
                      >
                        {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <Button variant="contained" type="submit" sx={{ width: '50%' }}>Login</Button>
            </Box>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }} >
              <Typography variant="body2" color="primary" sx={{ textDecoration: "underline" }} >Don't have an account? Sign up</Typography>
            </Link>
          </Stack>
        </form>
      </Paper >
    </Box >
  )
}
export default LoginView