import { NoteType } from "../../../types/types"
import { Box, Typography } from "@mui/material"
import GenericChip from "../../common/GenericChip"

interface ViewNoteProps {
  note: NoteType
}

const DetailsNote = ({ note }: ViewNoteProps) => {

  const { title, text, category } = note

  return (
    <Box sx={{ minWidth: 600 }}>
      <Typography variant="h6" color="primary" sx={{ textAlign: 'left', fontWeight: 600 }}>{title}</Typography>
      <Box sx={{ maxHeight: 250, overflowY: 'auto' }}>
        <Typography variant="body1" sx={{ textAlign: 'left' }}>{text}</Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 2 }}>
        <GenericChip category={category} sizechip="large" />
      </Box>
    </Box>
  )
}
export default DetailsNote