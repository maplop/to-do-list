import { Modal, Box, styled, IconButton } from "@mui/material"
import { red } from "@mui/material/colors"
import CloseIcon from '@mui/icons-material/Close';

interface GenericModalProps {
  open: boolean,
  handleClose: () => void,
  children: React.ReactElement
}

const GenericModal = ({ open, handleClose, children }: GenericModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 24,
        py: 2,
        px: 3
      }}>
        <CloseBtn onClick={handleClose}>
          <CloseIcon color="error" />
        </CloseBtn>
        {children}
      </Box>

    </Modal>
  )
}
export default GenericModal

const CloseBtn = styled(IconButton)(() => ({
  position: 'absolute',
  top: -10,
  right: -10,
  width: 32,
  height: 32,
  borderRadius: 50,
  background: red[50],
  border: `1px solid ${red[500]}`,

  ':hover': {
    background: red[100],
  }
}))
