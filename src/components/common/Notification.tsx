import { Alert, Slide, SlideProps, Snackbar } from "@mui/material"

interface NotificationProps {
  open: boolean;
  type: "success" | "error" | "info" | "warning";
  message: string;
  handleClose: () => void;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const Notification = ({ open, type, message, handleClose }: NotificationProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      TransitionComponent={SlideTransition}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>

  )
}
export default Notification