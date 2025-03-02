import {
  Snackbar,
  Alert
} from '@mui/material'

const Notification = ({open, severity, message, onClose}) => {

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      onClose={onClose}
    >
      <Alert
        severity={severity}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Notification