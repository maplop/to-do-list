import { VisibilityOff, Visibility } from "@mui/icons-material"
import Grid from '@mui/material/Grid2';
import { Paper, Box, Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useSignup } from "./useSignup";

const SignupView = () => {

  const { formValues, handleInputChange, passwordVisibility, changePasswordVisibility, handleSubmit } = useSignup()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Box sx={{ display: 'flex', height: '100%', }}>
      <Paper elevation={3} sx={{ width: 400, margin: 'auto', p: 5 }} >
        <Box sx={{ pb: 1 }} >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>Sign up</Typography>
        </Box>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid size={6}>
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
                variant="standard"
                fullWidth />
            </Grid>
            <Grid size={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                variant="standard"
                fullWidth />
            </Grid>
            <Grid size={9}>
              <TextField
                label="User"
                name="user"
                value={formValues.user}
                onChange={handleInputChange}
                required
                variant="standard"
                fullWidth />
            </Grid>
            <Grid size={3}>
              <TextField
                type="number"
                label="Age"
                name="age"
                value={formValues.age}
                onChange={handleInputChange}
                variant="standard"
                fullWidth />
            </Grid>
            <Grid size={12}>
              <FormControl variant="standard" required fullWidth >
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={passwordVisibility ? 'text' : 'password'}
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
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
            </Grid>

            <Grid size={12}>
              <Button variant="contained" type="submit" sx={{ width: '50%' }} onClick={handleSubmit} >Sign up</Button>
            </Grid>
            <Grid size={12} >
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Typography variant="body2" color="primary" sx={{ textDecoration: "underline" }} >
                  Already have an account? Log in
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper >
    </Box >
  )
}
export default SignupView