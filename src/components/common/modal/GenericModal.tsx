import { Modal, Box } from "@mui/material"

interface GenericModalProps {
  open: boolean,
  handleClose: () => void,
  children: React.ReactElement
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  py: 2,
  px: 3
};

const GenericModal = ({ open, handleClose, children }: GenericModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {children}
      </Box>

    </Modal>
  )
}
export default GenericModal