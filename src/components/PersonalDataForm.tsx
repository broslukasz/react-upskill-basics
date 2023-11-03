import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IPersonalDataForm } from "./i-personal-data";

type PersonalDataProps = {
  personalData: IPersonalDataForm
}

export default function PersonalDataForm({personalData}: PersonalDataProps) {
  const { register } = useForm<IPersonalDataForm>({defaultValues: personalData})

  return <>
          <TextField {...register('companyName', { required: true })} id="company-name" label="Company name" variant="standard" fullWidth />
          <TextField {...register('city', { required: true })} id="city" label="City" variant="standard" fullWidth />
          <TextField {...register('street', { required: true })} id="street" label="Street" variant="standard" fullWidth />
          <TextField {...register('postcode', { required: true })} id="postcode" label="Postcode" variant="standard" fullWidth />
          <TextField {...register('nip', { required: true })} id="nip" label="NIP" variant="standard" fullWidth />
          <TextField {...register('phoneNumber', { required: true })} id="tel" label="Tel" variant="standard" fullWidth />
          <TextField {...register('email', { required: true })} id="email" label="E-mail" variant="standard" fullWidth />
          <TextField {...register('bankAccount', { required: true })} id="bank-account" label="Bank Account" variant="standard" fullWidth />
        </>
}