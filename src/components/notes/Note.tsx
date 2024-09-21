import { Paper, Stack, Typography, Tooltip, Box, IconButton } from "@mui/material"
import CategoryIcon from '@mui/icons-material/Category';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Note = () => {
  return (
    <Paper>
      <Stack sx={{ p: 2 }}>
        <Typography variant="body2" color="primary" sx={{ textAlign: 'left', fontWeight: 600 }}>Title</Typography>
        <Box sx={{ textAlign: "left", maxHeight: 100, overflowY: 'auto' }}>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1
          }}>
          <Tooltip title="Category">
            <CategoryIcon fontSize="small" />
          </Tooltip>
          <Box >
            <Tooltip title="Details">
              <IconButton aria-label="delete" size="small">
                <RemoveRedEyeIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton aria-label="delete" size="small">
                <ModeEditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
export default Note