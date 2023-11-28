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

function createData(invoiceNumber: string, created: string, validUntil: string, amount: number, actions: null) {
  return { invoiceNumber, created, validUntil, amount, actions };
}

const rows = [
  createData('21/23/20', new Date('04/22/2020').toDateString(), new Date('12/6/2021').toDateString(), 838, null),
  createData('22/23/20', new Date('04/22/2020').toDateString(), new Date('12/6/2021').toDateString(), 838, null),
  createData('23/23/20', new Date('04/22/2020').toDateString(), new Date('12/6/2021').toDateString(), 838, null),
  createData('24/23/20', new Date('04/22/2020').toDateString(), new Date('12/6/2021').toDateString(), 838, null),
  createData('25/23/20', new Date('04/22/2020').toDateString(), new Date('12/6/2021').toDateString(), 838, null),
];

export default function InvoiceList() {
  const { data, error, status } = useInvoiceList();

  console.log('response', data, error, status);

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
            {rows.map((row) => (
              <TableRow key={row.invoiceNumber} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.invoiceNumber}
                </TableCell>
                <TableCell align="right">{row.created}</TableCell>
                <TableCell align="right">{row.validUntil}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <EditIcon />
                  </IconButton>
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
