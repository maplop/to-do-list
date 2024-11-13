import { Paper, Stack, Typography, Box, SpeedDial, styled } from "@mui/material"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GenericChip from "../../common/GenericChip";
import { grey } from "@mui/material/colors";
import GenericModal from "../../common/GenericModal";
import DetailsNote from "../details-note/DetailsNote";
import useNote from "./useNote";
import DeleteConfirmDialog from "../../common/DeleteConfirmDialog";
import { NoteType } from "../../../types/types";

interface NoteProps {
  note: NoteType,
  handleDeleteNote: (noteId: string) => void,
  handleEditNote: (note: NoteType) => void,
}

const Note = ({ note, handleDeleteNote, handleEditNote }: NoteProps) => {

  const {
    showDetails,
    setShowDetails,
    openDeleteDialog,
    setOpenDeleteDialog,
  } = useNote()

  const actions = [
    { icon: <DeleteIcon fontSize="small" />, name: 'Delete', action: () => setOpenDeleteDialog(true) },
    { icon: <ModeEditIcon fontSize="small" />, name: 'Edit', action: () => handleEditNote(note) },
    { icon: <RemoveRedEyeIcon fontSize="small" />, name: 'Details', action: () => setShowDetails(true) },
  ];

  return (
    <>
      <Paper>
        <Stack sx={{ p: 2, position: 'relative', }}>
          <Typography variant="body2" color="primary" sx={{ textAlign: 'left', fontWeight: 600 }}>
            {note.title}
          </Typography>
          <Box sx={{ textAlign: "left", maxHeight: 100, overflowY: 'auto' }}>
            <Typography variant="caption" >
              {note.text}
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}>
            <GenericChip category={note.category} />
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
                  onClick={action.action}
                />
              ))}
            </FloatingMenu>
          </Stack>
        </Stack>
      </Paper>
      <GenericModal open={showDetails} handleClose={() => setShowDetails(false)}>
        <DetailsNote note={note} />
      </GenericModal>
      <DeleteConfirmDialog
        title="Are you sure you want to delete this note?"
        message="  This action cannot be undone. Once deleted, the note will be permanently removed.
            Do you wish to proceed with the deletion?"
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        handleAction={() => handleDeleteNote(note.id)}
      />
    </>
  )
}
export default Note

const FloatingMenu = styled(SpeedDial)(() => ({
  '.MuiButtonBase-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    maxHeight: 36,
    background: grey[100],
    color: grey[700],

    ':hover': {
      background: grey[200],
    },

    svg: {
      width: 24,
      height: 20,
    }
  }
}))