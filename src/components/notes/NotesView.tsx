import { Box, Stack, IconButton, styled, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PageTitle from "../common/PageTitle"
import Note from "./single-note/Note";
import Grid from '@mui/material/Grid2';
import GenericModal from "../common/modal/GenericModal";
import AddNote from "./add-note/AddNote";
import useNotesView from "./useNotesView";
import { grey } from "@mui/material/colors";

const NotesView = () => {
  const {
    openModalNewNote,
    setOpenModalNewNote,
    notes,
    isLoading,
    category,
    note,
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
        <PageTitle title="My Notes" />
        <Box>
          <Tooltip title="Add Note" placement="left">
            <IconBtn onClick={() => setOpenModalNewNote(true)}>
              <AddIcon />
            </IconBtn>
          </Tooltip>
        </Box>
      </Stack>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <Grid container spacing={1}>
          {notes.length > 0 ? (
            notes.map((note) => (
              <Grid size={6} key={note.id}>
                <Note note={note} handleDeleteNote={handleDeleteNote} />
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
      )}

      {openModalNewNote &&
        <GenericModal open={openModalNewNote} handleClose={() => setOpenModalNewNote(false)} >
          <AddNote
            category={category}
            note={note}
            handleCategoryChange={handleCategoryChange}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleClose={() => setOpenModalNewNote(false)} />
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
