import { DatePicker } from '@mui/x-date-pickers';

import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';


interface IPersonalData {

  companyName: string | null;
  city: string | null;
  street: string | null;
  postcode: string | null;
  nip: number | null;
  phoneNumber: number | null;
  email: string | null,
  bankAccount: string | null;
}

interface IInvoiceForm {
  invoiceNumber: null,
  dateFrom: Date | null;
  dateTo: Date | null;
  recipient: IPersonalData;
  sender: IPersonalData
}

const personalData = {
  companyName: null,
  city: null,
  street: null,
  postcode: null,
  nip: null,
  phoneNumber: null,
  email: null,
  bankAccount: null,
}

const defaultValues = {
  invoiceNumber: null,
  dateFrom: null,
  dateTo: null,
  recipient: personalData,
  sender: personalData
}

export default function Invoice() {
  const { handleSubmit, register, control } = useForm<IInvoiceForm>({
    defaultValues,
  })

  const onSubmit: SubmitHandler<IInvoiceForm> = (data) => console.log(data)

  return (
    <>
      <Grid container spacing={2} p={4} direction={'column'} mb={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item container>
            <Grid item xs={6} container>
              <TextField {...register('invoiceNumber', { required: true })} fullWidth label="No." variant="standard" />
              <Grid item container spacing={2} pt={2}>
                <Grid item sm={6}>
                <Controller
                  name="dateFrom"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <DatePicker  {...field}/>}
                />
                </Grid>
                <Grid item sm={6}>
                <Controller
                  name="dateTo"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <DatePicker  {...field}/>}
                />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              container
              justifyContent="flex-end"
              alignItems="flex-start"
              gap={2}
              sx={{ height: 'fit-content' }}
            >
              <Button className="mr-2" variant="outlined">
                Cancel
              </Button>
              <Button variant="contained" type='submit' startIcon={<SaveIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>

          <Grid item container textAlign={'left'} mt={2} spacing={4}>
            <Grid xs={6} item>
              <Typography variant="h4" component="p">
                Recipient
              </Typography>

              <Box mt={6}>
                <TextField {...register('recipient.companyName', { required: true })} id="recipient-company-name" label="Company name" variant="standard" fullWidth />
                <TextField {...register('recipient.city', { required: true })} id="recipient-city" label="City" variant="standard" fullWidth />
                <TextField {...register('recipient.street', { required: true })} id="recipient-street" label="Street" variant="standard" fullWidth />
                <TextField {...register('recipient.postcode', { required: true })} id="recipient-postcode" label="Postcode" variant="standard" fullWidth />
                <TextField {...register('recipient.nip', { required: true })} id="recipient-nip" label="NIP" variant="standard" fullWidth />
                <TextField {...register('recipient.phoneNumber', { required: true })} id="recipient-tel" label="Tel" variant="standard" fullWidth />
                <TextField {...register('recipient.email', { required: true })} id="recipient-email" label="E-mail" variant="standard" fullWidth />
                <TextField {...register('recipient.bankAccount', { required: true })} id="recipient-bank-account" label="Bank Account" variant="standard" fullWidth />
              </Box>
            </Grid>
            <Grid xs={6} item>
              <Typography variant="h4" component="p">
                Sender
              </Typography>

              <Box mt={6}>
                {/* Pytanie Dlaczego czasem daje kursor na koniec */}
                <TextField {...register('sender.companyName', { required: true })} id="sender-company-name" label="Company name" variant="standard" fullWidth />
                <TextField {...register('sender.city', { required: true })} id="sender-city" label="City" variant="standard" fullWidth />
                <TextField {...register('sender.street', { required: true })} id="sender-street" label="Street" variant="standard" fullWidth />
                <TextField {...register('sender.postcode', { required: true })} id="sender-postcode" label="Postcode" variant="standard" fullWidth />
                <TextField {...register('sender.nip', { required: true })} id="sender-nip" label="NIP" variant="standard" fullWidth />
                <TextField {...register('sender.phoneNumber', { required: true })} id="sender-tel" label="Tel" variant="standard" fullWidth />
                <TextField {...register('sender.email', { required: true })} id="sender-email" label="E-mail" variant="standard" fullWidth />
                <TextField {...register('sender.bankAccount', { required: true })} id="sender-bank-account" label="Bank Account" variant="standard" fullWidth />
              </Box>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item container spacing={3}>
              <Grid item xs={6}>
                <TextField id="name" label="Name" variant="standard" fullWidth />
              </Grid>

              <Grid item xs={1.2}>
                <TextField type="number" id="amount" label="Amount" variant="standard" fullWidth />
              </Grid>

              <Grid item xs={1.2}>
                <TextField id="unit" label="Unit" variant="standard" fullWidth />
              </Grid>

              <Grid item xs={1.2}>
                <TextField type="number" id="tax" label="Tax" variant="standard" fullWidth />
              </Grid>

              <Grid item xs={1.2}>
                <TextField type="number" id="price" label="Price" variant="standard" fullWidth />
              </Grid>

              <Grid item container xs={1.2} alignItems={'center'} justifyContent={'center'}>
                {/* Pytanie: Jak zrobić autoimport do ikon */}
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
