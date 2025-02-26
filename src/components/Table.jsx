import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton, 
  Stack 
} from '@mui/material';

import { 
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {campos} from '../data/constants';

export default function DenseTable({data}) {
  const { deleteItem } = useContext(AppContext);

  const handleDelete = async (id) => {
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
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell align="center">Cargando...</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
