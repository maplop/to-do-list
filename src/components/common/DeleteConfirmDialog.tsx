import { Box, DialogTitle, Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteConfirmDialogProps {
  title: string,
  message: string,
  open: boolean,
  handleAction: () => void,
  handleClose: () => void
}

const DeleteConfirmDialog = ({ title, message, open, handleClose, handleAction }: DeleteConfirmDialogProps) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='xs'

      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: red[100],
            width: 54,
            height: 54,
            borderRadius: '100%',
            margin: 'auto',
            marginBottom: 2
          }}>
            <DeleteIcon color='error' />
          </Box>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0, justifyContent: 'center' }}>
          <Button
            onClick={handleClose}
            variant='outlined'
            color='error'
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAction();
              handleClose()
            }}
            variant='contained'
            color='error'
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog >
    </>
  );
}
export default DeleteConfirmDialog