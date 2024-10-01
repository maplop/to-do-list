import { TextField, Stack, Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { categoryMap } from '../../../data/categories';
import { NoteType } from '../../../types/types';

interface AddNoteProps {
  category: string,
  note: NoteType,
  handleCategoryChange: (event: SelectChangeEvent) => void,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.FormEvent) => void,
  handleClose: () => void
}

const AddNote = ({ category, note, handleCategoryChange, handleInputChange, handleSubmit, handleClose }: AddNoteProps) => {

  const categories = Object.keys(categoryMap)

  return (
    <Stack sx={{ width: 500 }} >
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <Typography variant='h5' color='primary' sx={{ fontWeight: 700, textAlign: 'left' }}>Add Note</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              label="Title"
              name='title'
              value={note.title}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              size='small'
            />
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth size='small' sx={{ textAlign: 'left' }} >
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={category}
                name='category'
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <TextField
              id="outlined-textarea"
              label="Note"
              placeholder="Add note text"
              name="text"
              value={note.text}
              onChange={handleInputChange}
              multiline
              fullWidth
              rows={4}
            />
          </Grid>
        </Grid>
        <Box mt={2} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' type='submit'>Add</Button>
        </Box>
      </form>
    </Stack >
  )
}
export default AddNote