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
import { parse } from 'date-fns';
import { Link } from 'react-router-dom';

type InvoiceProps = {
  defaultValues: IInvoiceForm;
};

const parseDate = (dateString: string | null) => {
  if (!dateString) {
    return null;
  }

  return new Date(parse(dateString, 'yyyy-MM-dd', new Date()));
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
              <TextField {...register('id')} fullWidth label="No." variant="standard" error={!!errors?.id} />
              <Grid item container spacing={2} pt={2}>
                <Grid item sm={6}>
                  <Controller
                    name="createdAt"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        value={parseDate(field.value)}
                        slotProps={{ textField: { error: !!errors?.createdAt } }}
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={6}>
                  <Controller
                    name="validUntil"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        value={parseDate(field.value)}
                        slotProps={{ textField: { error: !!errors?.validUntil } }}
                      />
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
              <Link to="/">
                <Button className="mr-2" variant="outlined">
                  Cancel
                </Button>
              </Link>

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
