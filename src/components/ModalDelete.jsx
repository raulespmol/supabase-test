import {
  Button, 
  Dialog,
  DialogActions, 
  DialogContent,
  DialogContentText
} from '@mui/material';

import {Delete as DeleteIcon} from '@mui/icons-material';

const ModalDelete = ({item, open}) => {
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
    >
      <DialogContent>
        <DialogContentText>
          ¿Estás seguro de eliminar este registro?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => console.log('Cancelar')}
        >
          No, cancelar
        </Button>
        <Button
          onClick={() => console.log('Eliminar', item)}
          color='error'
          startIcon={<DeleteIcon fontSize='xs'/>}
        >
          Sí, eliminar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalDelete