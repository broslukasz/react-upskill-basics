import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useInvoiceList } from './use-invoice-list';
import type { IInvoiceForm } from './Models/InvoiceForm.interface';
import { Link } from 'react-router-dom';

function createData(invoiceNumber: string, created: string, validUntil: string, amount: number, actions: null) {
  return { invoiceNumber, created, validUntil, amount, actions };
}

export default function InvoiceList() {
  const { data } = useInvoiceList();

  const rows = (data as IInvoiceForm[]) ?? [];

  return (
    <Grid container spacing={2} p={4} direction={'column'} mb={0}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Valid Until</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length &&
              rows.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                  <TableCell align="right">{row.validUntil}</TableCell>
                  <TableCell align="right">{row.items.reduce((a, b) => a + b.amount, 0)}</TableCell>
                  <TableCell align="right">
                    <Link to={{ pathname: `edit/${row.id}` }}>
                      <IconButton aria-label="delete">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
