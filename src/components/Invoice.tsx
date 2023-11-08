import { DatePicker } from '@mui/x-date-pickers';

import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import PersonalDataForm from './PersonalDataForm';
import type { IInvoiceForm } from './InvoiceForm.interface';

const personalData = {
  companyName: '',
  city: '',
  street: '',
  postcode: '',
  nip: '',
  phoneNumber: null,
  email: '',
  bankAccount: '',
};

const defaultValues = {
  invoiceNumber: null,
  dateFrom: null,
  dateTo: null,
  recipient: personalData,
  sender: personalData,
};

export default function Invoice() {
  const { handleSubmit, register, control } = useForm<IInvoiceForm>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<IInvoiceForm> = (data) => console.log(data);

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
                    render={({ field }) => <DatePicker {...field} />}
                  />
                </Grid>
                <Grid item sm={6}>
                  <Controller
                    name="dateTo"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <DatePicker {...field} />}
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
              <Button variant="contained" type="submit" startIcon={<SaveIcon />}>
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
                <PersonalDataForm register={register} variant="recipient" />
              </Box>
            </Grid>
            <Grid xs={6} item>
              <Typography variant="h4" component="p">
                Sender
              </Typography>

              <Box mt={6}>
                <PersonalDataForm register={register} variant="sender" />
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
