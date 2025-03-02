import {
  Button, 
  Dialog,
  DialogActions, 
  DialogContent,
  DialogContentText
} from '@mui/material';

import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {Delete as DeleteIcon} from '@mui/icons-material';
import { useNotification } from '../context/NotificationContext';

const ModalDelete = ({item, setItem, open, setOpen}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteItem } = useContext(AppContext);
  const notify = useNotification();

  const handleClose = () => {
    setItem(null);
    setOpen(false);
  }

  const handleDelete = async (item) => {
    try {
      setIsLoading(true);
      await deleteItem(item);
      notify("Item eliminado correctamente", "success");
    } catch (error) {
      console.error(error);
      notify("Error al eliminar item", "error");
    } finally {
      setIsLoading(false);
      handleClose();
    }
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
          onClick={handleClose}
        >
          No, mantenerlo
        </Button>
        <Button
          onClick={() => handleDelete(item)}
          disabled={isLoading}
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