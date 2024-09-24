import { Paper, Stack, Typography, Box, SpeedDial, styled } from "@mui/material"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GenericChip from "../common/GenericChip";
import { blue } from "@mui/material/colors";

const actions = [
  { icon: <DeleteIcon fontSize="small" />, name: 'Delete' },
  { icon: <ModeEditIcon fontSize="small" />, name: 'Edit' },
  { icon: <RemoveRedEyeIcon fontSize="small" />, name: 'Details' },
];

const Note = () => {
  return (
    <Paper>
      <Stack sx={{ p: 2, position: 'relative', }}>
        <Typography variant="body2" color="primary" sx={{ textAlign: 'left', fontWeight: 600 }}>Title</Typography>
        <Box sx={{ textAlign: "left", maxHeight: 100, overflowY: 'auto' }}>
          <Typography variant="caption" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}>
          <GenericChip />
          <FloatingMenu
            ariaLabel="SpeedDial basic example"

            sx={{
              position: 'absolute',
              bottom: 8,
              right: 0
            }}
            icon={<MoreVertIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </FloatingMenu>
        </Stack>
      </Stack>
    </Paper>
  )
}
export default Note

const FloatingMenu = styled(SpeedDial)(({ theme }) => ({
  '.MuiButtonBase-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    maxHeight: 36,
    background: blue[50],
    color: theme.palette.primary.main,

    ':hover': {
      background: blue[100],
    },

    svg: {
      width: 24,
      height: 20,
    }
  }
}))