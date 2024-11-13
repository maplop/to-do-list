import { FormControlLabel, Radio, RadioGroup, TextField, Box, FormLabel, FormControl, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { UserType } from '../../../types/types';

interface ProfileDataProps {
  formValues: Omit<UserType, 'id'> | null,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSave: () => void
}


const ProfileData = ({ formValues, handleChange, handleSave }: ProfileDataProps) => {

  const onSumbit = () => {
    console.log("User --- ", formValues)
    handleSave()
  }


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            placeholder='Name'
            name='name'
            value={formValues?.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            placeholder='Last name'
            name="lastName"
            value={formValues?.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={8}>
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            placeholder='Username'
            name='user'
            value={formValues?.user}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            type='number'
            placeholder='Age'
            name="age"
            value={formValues?.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ textAlign: 'left', fontSize: 14, fontWeight: 600 }}>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={formValues?.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'end' }} mt={5}>
        <Button variant="text">Cancel</Button>
        <Button variant="contained" onClick={onSumbit}>Save</Button>
      </Box>
    </Box>
  )
}
export default ProfileData
