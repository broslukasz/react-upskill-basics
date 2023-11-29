import { DatePicker } from '@mui/x-date-pickers';

import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import PersonalDataForm from '../PersonalDataForm';
import { invoiceFormSchema, type IInvoiceForm } from '../Models/InvoiceForm.interface';
import AmountForm from '../AmountsForm';
import { zodResolver } from '@hookform/resolvers/zod';

type InvoiceProps = {
  defaultValues: IInvoiceForm;
};

export default function InvoiceForm({ defaultValues }: InvoiceProps) {
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
              <TextField {...register('id')} fullWidth label="No." variant="standard" error={!!errors?.invoiceNumber} />
              <Grid item container spacing={2} pt={2}>
                <Grid item sm={6}>
                  <Controller
                    name="createdAt"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker {...field} slotProps={{ textField: { error: !!errors?.createdAt } }} />
                    )}
                  />
                </Grid>
                <Grid item sm={6}>
                  <Controller
                    name="validUntil"
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
