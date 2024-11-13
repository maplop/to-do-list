import { Box, Stack, IconButton, styled, Tooltip, Typography, Divider } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PageTitle from "../common/PageTitle"
import Note from "./single-note/Note";
import Grid from '@mui/material/Grid2';
import GenericModal from "../common/GenericModal";
import NoteForm from "./note-form/NoteForm";
import useNotesView from "./useNotesView";
import { grey } from "@mui/material/colors";

const NotesView = () => {
  const {
    openNoteFormModal,
    setOpenNoteFormModal,
    handleCloseNoteFormModal,
    notes,
    note,
    handleEditNote,
    handleCategoryChange,
    handleInputChange,
    handleSubmit,
    handleDeleteNote,
  } = useNotesView()

  return (
    <Stack spacing={2}>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }} >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <PageTitle title="My Notes" />
          <Box>({notes.length})</Box>
        </Stack>
        <Box>
          <Tooltip title="Add Note" placement="left">
            <IconBtn onClick={() => setOpenNoteFormModal(true)}>
              <AddIcon />
            </IconBtn>
          </Tooltip>
        </Box>
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={1}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Grid size={6} key={note.id}>
              <Note
                note={note}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
              />
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}
          >
            <Typography variant="h6" color={grey[400]}>No notes to show :(</Typography>
          </Box>
        )}
      </Grid>
      {openNoteFormModal &&
        <GenericModal open={openNoteFormModal} handleClose={handleCloseNoteFormModal} >
          <NoteForm
            note={note}
            handleCategoryChange={handleCategoryChange}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleClose={handleCloseNoteFormModal} />
        </GenericModal>}
    </Stack >
  )
}
export default NotesView

const IconBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  ':hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}))
