import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Medidas</TableCell>
            <TableCell align="right">Material</TableCell>
            <TableCell align="right">Observaciones</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length ? (
            data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.nombre}
              </TableCell>
              <TableCell align="right">{item.medidas}</TableCell>
              <TableCell align="right">{item.material}</TableCell>
              <TableCell align="right">{item.observaciones}</TableCell>
              <TableCell align="right">{item.cantidad}</TableCell>
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
