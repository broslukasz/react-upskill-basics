import { TextField } from '@mui/material';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';
import type { IInvoiceForm } from './Models/Form/InvoiceForm.interface';

type PersonalDataProps = {
  register: UseFormRegister<IInvoiceForm>;
  variant: keyof Record<'sender' | 'recipient', IInvoiceForm>;
  errors: FieldErrors<IInvoiceForm>;
};

export default function PersonalDataForm({ register, variant, errors }: PersonalDataProps) {
  return (
    <>
      <TextField
        {...register(`${variant}.companyName`, { required: true })}
        id="company-name"
        label="Company name"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.companyName?.message}
        helperText={errors[variant]?.companyName?.message}
      />
      <TextField
        {...register(`${variant}.city`, { required: true })}
        id="city"
        label="City"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.city}
      />
      <TextField
        {...register(`${variant}.street`, { required: true })}
        id="street"
        label="Street"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.street}
      />
      <TextField
        {...register(`${variant}.postcode`, { required: true })}
        id="postcode"
        label="Postcode"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.postcode}
      />
      <TextField
        {...register(`${variant}.nip`, { required: true })}
        id="nip"
        label="NIP"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.nip}
      />
      <TextField
        {...register(`${variant}.phone`, { required: true })}
        id="phone"
        label="Tel"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.phone}
      />
      <TextField
        {...register(`${variant}.email`, { required: true })}
        id="email"
        label="E-mail"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.email}
      />
      <TextField
        {...register(`${variant}.bankAccount`, { required: true })}
        id="bank-account"
        label="Bank Account"
        variant="standard"
        fullWidth
        error={!!errors[variant]?.bankAccount}
      />
    </>
  );
}
