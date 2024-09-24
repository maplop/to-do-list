import { Box, Stack, IconButton, styled, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PageTitle from "../common/PageTitle"
import Note from "./Note";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import GenericModal from "../common/modal/GenericModal";

const NotesView = () => {
  const [openModalNewNote, setOpenModalNewNote] = useState<boolean>(false)
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
      <Grid container spacing={1}>
        <Grid size={6}>
          <Note />
        </Grid>
        <Grid size={6}>
          <Note />
        </Grid>
        <Grid size={6}>
          <Note />
        </Grid>
        <Grid size={6}>
          <Note />
        </Grid>
      </Grid>
      {openModalNewNote && <GenericModal open={openModalNewNote} handleClose={() => setOpenModalNewNote(false)} ><Box>Hello Modal new note</Box></GenericModal>}
    </Stack>
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
