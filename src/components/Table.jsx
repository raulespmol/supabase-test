import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton, 
  Stack,
  Skeleton
} from '@mui/material';

import { 
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {campos} from '../data/constants';
import ModalDelete from './ModalDelete';

export default function DenseTable({data}) {
  const { deleteItem } = useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = (item) => {
    setSelectedItem(item);
    setOpenDelete(true)
  }

  const handleDelete = async (id) => {
    console.log('Eliminando...', id);
    await deleteItem(id);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {campos.map((campo) => (
              <TableCell key={campo}>{campo}</TableCell>
            ))}
            <TableCell>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data && data.length ? (
            data.map((item) => (
            <TableRow
              className="hover:bg-gray-100"
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {campos.map((campo) => (
                <TableCell key={campo}>
                  {item[campo.toLowerCase()] || "N/A"}
                </TableCell>
              ))}

              <TableCell>
                <Stack direction="row" spacing={1}>
                  <IconButton 
                    size="small"
                    onClick={() => console.log('Editando...', item.id)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>

                  <IconButton 
                    size="small"
                    onClick={() => handleOpenDelete(item.id)}
                  >
                    <DeleteIcon fontSize="small" color="warning"/>
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell colSpan={campos.length + 1}>
                <Skeleton />
              </TableCell>
            </TableRow>
          ))
        )}
        </TableBody>
      </Table>

      <ModalDelete 
        open={openDelete}
        setOpen={setOpenDelete}
        item={selectedItem}
        setItem={setSelectedItem}
      />
    </TableContainer>
  );
}
