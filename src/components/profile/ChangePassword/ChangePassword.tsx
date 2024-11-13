import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, InputAdornment, IconButton, OutlinedInput, FormHelperText } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { PasswordValuesType } from "../useProfileView";
import { useAuth } from "../../../hooks/useAuth";

interface ChangePasswordProps {
  passwordValues: PasswordValuesType,
  handleInputPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangePassword: () => void
}


const ChangePassword = ({ passwordValues, handleInputPasswordChange, handleChangePassword }: ChangePasswordProps) => {
  const { user } = useAuth()
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSumbit = () => {
    handleChangePassword()
  }

  return (
    <Box>
      <Grid container spacing={2} mt={1}>
        <Grid size={12}>
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            error={!!passwordValues.currentPassword && user?.password !== passwordValues.currentPassword}
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={passwordVisibility ? 'text' : 'password'}
              placeholder='Current password'
              name="currentPassword"
              value={passwordValues.currentPassword}
              onChange={handleInputPasswordChange}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      passwordVisibility ? 'hide the password' : 'display the password'
                    }
                    onClick={changePasswordVisibility}
                    edge="end"
                  >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordValues.currentPassword && user?.password !== passwordValues.currentPassword && (
              <FormHelperText>
                The current password is incorrect
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl variant="outlined" size="small" fullWidth>
            <OutlinedInput
              id="outlined-adornment-password"
              type={passwordVisibility ? 'text' : 'password'}
              placeholder='New password'
              name="newPassword"
              value={passwordValues.newPassword}
              onChange={handleInputPasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      passwordVisibility ? 'hide the password' : 'display the password'
                    }
                    onClick={changePasswordVisibility}
                    edge="end"
                  >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid size={12}>
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            error={!!passwordValues.newPassword && !!passwordValues.confirmPassword && passwordValues.newPassword !== passwordValues.confirmPassword}
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={passwordVisibility ? 'text' : 'password'}
              placeholder='Confirm password'
              name="confirmPassword"
              value={passwordValues.confirmPassword}
              onChange={handleInputPasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      passwordVisibility ? 'hide the password' : 'display the password'
                    }
                    onClick={changePasswordVisibility}
                    edge="end"
                  >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordValues.newPassword && passwordValues.confirmPassword && passwordValues.newPassword !== passwordValues.confirmPassword && (
              <FormHelperText>
                The new password and confirmation do not match
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'end' }} mt={5}>
        <Button
          variant="contained"
          disabled={
            !(
              passwordValues.currentPassword &&
              passwordValues.newPassword &&
              passwordValues.confirmPassword &&
              passwordValues.currentPassword === user?.password &&
              passwordValues.newPassword === passwordValues.confirmPassword
            )
          }
          onClick={onSumbit}
        >
          Change
        </Button>
      </Box>
    </Box>

  )
}
export default ChangePassword


