import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import type { IInvoiceForm } from './Models/InvoiceForm.interface';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { type UseFormRegister, type Control, useFieldArray, type FieldErrors } from 'react-hook-form';

type AmountsProps = {
  register: UseFormRegister<IInvoiceForm>;
  control: Control<IInvoiceForm>;
  errors: FieldErrors<IInvoiceForm>;
};

export default function AmountForm({ register, control, errors }: AmountsProps) {
  const { fields, remove, append } = useFieldArray<IInvoiceForm>({
    control,
    name: 'items',
  });

  return (
    <>
      {fields.map((field, index) => (
        <Grid key={field.id} item container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="name"
              key={field.id}
              {...register(`items.${index}.name`)}
              label="Name"
              variant="standard"
              fullWidth
              error={!!errors?.items?.[index]?.name}
            />
          </Grid>
          <Grid item xs={1.2}>
            <TextField
              type="number"
              // ToDo Nie podpowiada składni po index
              key={field.id}
              {...register(`items.${index}.amount`, { valueAsNumber: true })}
              id="amount"
              label="Amount"
              variant="standard"
              fullWidth
              error={!!errors?.items?.[index]?.amount}
            />
          </Grid>
          <Grid item xs={1.2}>
            <TextField
              id="unit"
              key={field.id}
              {...register(`items.${index}.unit`)}
              label="Unit"
              variant="standard"
              fullWidth
              error={!!errors?.items?.[index]?.unit?.message}
            />
          </Grid>
          <Grid item xs={1.2}>
            <TextField
              type="number"
              key={field.id}
              {...register(`items.${index}.tax`, { valueAsNumber: true })}
              id="tax"
              label="Tax"
              variant="standard"
              fullWidth
              error={!!errors?.items?.[index]?.tax}
            />
          </Grid>
          <Grid item xs={1.2}>
            <TextField
              key={field.id}
              {...register(`items.${index}.price`)}
              id="price"
              label="Price"
              variant="standard"
              fullWidth
              error={!!errors?.items?.[index]?.price}
            />
          </Grid>
          <Grid item container xs={1.2} alignItems={'center'} justifyContent={'center'}>
            {/* Pytanie: Jak zrobić autoimport do ikon */}

            <IconButton onClick={() => remove(index)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Box mt={2} width={'100%'} textAlign={'right'}>
        <Button
          onClick={() =>
            append({ id: Date.now().toString(), name: '', amount: null, unit: '', tax: null, price: null })
          }
          variant="contained"
          type="submit"
          startIcon={<AddIcon />}
        >
          Add Item
        </Button>
      </Box>
    </>
  );
}
