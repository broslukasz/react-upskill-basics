import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { IInvoiceForm } from "./Invoice";

type PersonalDataProps = {
  register: UseFormRegister<IInvoiceForm>
  variant: keyof Record<'sender' | 'recipient', IInvoiceForm>;
}

export default function PersonalDataForm({register, variant}: PersonalDataProps) {
  return <>
    <TextField {...register(`${variant}.companyName`, { required: true })} id="company-name" label="Company name" variant="standard" fullWidth />
    <TextField {...register(`${variant}.city`, { required: true })} id="city" label="City" variant="standard" fullWidth />
    <TextField {...register(`${variant}.street`, { required: true })} id="street" label="Street" variant="standard" fullWidth />
    <TextField {...register(`${variant}.postcode`, { required: true })} id="postcode" label="Postcode" variant="standard" fullWidth />
    <TextField {...register(`${variant}.nip`, { required: true })} id="nip" label="NIP" variant="standard" fullWidth />
    <TextField {...register(`${variant}.phoneNumber`, { required: true })} id="tel" label="Tel" variant="standard" fullWidth />
    <TextField {...register(`${variant}.email`, { required: true })} id="email" label="E-mail" variant="standard" fullWidth />
    <TextField {...register(`${variant}.bankAccount`, { required: true })} id="bank-account" label="Bank Account" variant="standard" fullWidth />
  </>
}