import {
  Snackbar,
  Alert
} from '@mui/material'

const Notification = ({open, severity, message}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
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