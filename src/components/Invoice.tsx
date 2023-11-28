import { DatePicker } from '@mui/x-date-pickers';

import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import PersonalDataForm from './PersonalDataForm';
import { invoiceFormSchema, type IInvoiceForm } from './Models/InvoiceForm.interface';
import AmountForm from './AmountsForm';
import type { IPersonalDataForm } from './Models/PersonalDataForm.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IAmountsForm } from './Models/ItemsForm.interface';
import { useInvoice } from './get-invoice';
import { useParams } from 'react-router-dom';

const amountsData: IAmountsForm = [
  {
    id: Date.now().toString(),
    name: '',
    amount: null,
    unit: '',
    tax: null,
    price: null,
  },
];

const personalData: IPersonalDataForm = {
  companyName: '',
  city: '',
  street: '',
  postcode: '',
  nip: '',
  phoneNumber: null,
  email: '',
  bankAccount: '',
};

const defaultValues: IInvoiceForm = {
  invoiceNumber: '',
  createdAt: null,
  validUntil: null,
  recipient: personalData,
  sender: personalData,
  items: amountsData,
};

export default function Invoice() {
  const { id } = useParams();
  const { data } = useInvoice(id as string);
  const invoice = data as IInvoiceForm;

  if (invoice) {
    defaultValues.createdAt = invoice.createdAt;
    defaultValues.validUntil = invoice.validUntil;
    defaultValues.recipient = invoice.recipient;
    defaultValues.sender = invoice.sender;
    defaultValues.items = invoice.items;
  }

  const onSubmit: SubmitHandler<IInvoiceForm> = (data) => console.log(data);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<IInvoiceForm>({
    defaultValues,
    resolver: zodResolver(invoiceFormSchema),
  });

  return (
    <>
      <Grid container spacing={2} p={4} direction={'column'} mb={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item container>
            <Grid item xs={6} container>
              <TextField
                {...register('invoiceNumber')}
                fullWidth
                label="No."
                variant="standard"
                error={!!errors?.invoiceNumber}
              />
              <Grid item container spacing={2} pt={2}>
                <Grid item sm={6}>
                  <Controller
                    name="dateFrom"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker {...field} slotProps={{ textField: { error: !!errors?.createdAt } }} />
                    )}
                  />
                </Grid>
                <Grid item sm={6}>
                  <Controller
                    name="dateTo"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker {...field} slotProps={{ textField: { error: !!errors?.validUntil } }} />
                    )}
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
                Save
              </Button>
            </Grid>
          </Grid>

          <Grid item container textAlign={'left'} mt={2} spacing={4}>
            <Grid xs={6} item>
              <Typography variant="h4" component="p">
                Recipient
              </Typography>

              <Box mt={6}>
                <PersonalDataForm register={register} errors={errors} variant="recipient" />
              </Box>
            </Grid>
            <Grid xs={6} item>
              <Typography variant="h4" component="p">
                Sender
              </Typography>

              <Box mt={6}>
                <PersonalDataForm register={register} errors={errors} variant="sender" />
              </Box>
            </Grid>
          </Grid>

          <Grid item container>
            <AmountForm register={register} control={control} errors={errors} />
          </Grid>
        </form>
      </Grid>
    </>
  );
}
