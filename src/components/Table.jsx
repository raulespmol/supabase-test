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

import {campos} from '../data/constants';

export default function DenseTable({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {campos.map((campo) => (
              <TableCell key={campo}>{campo}</TableCell>
            ))}
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
