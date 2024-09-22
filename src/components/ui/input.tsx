import {
  Controller,
  FieldValues,
  UseFormSetValue,
  Control,
} from "react-hook-form";
import TextField from "@mui/material/TextField";
import { maskCPF, maskPhoneNumber } from "@/src/utils";
import { z } from "zod";
import { peopleSchema } from "@/src/features/people/schemas";

type FormInputProps = {
  name: string;
  label?: string;
  control: Control<any, any>;
  variant?: "filled" | "outlined" | "standard";
  size?: "medium" | "small";
  disabled?: boolean;
};

export const Input = ({
  name,
  control,
  label,
  variant = "standard",
  disabled = false,
  size = "small",
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant={variant}
          disabled={disabled}
        />
      )}
    />
  );
};

type MaskInputs<T extends FieldValues> = FormInputProps & {
  setValue: UseFormSetValue<T>;
  inputVariant: "cpf" | "phoneNumber";
};

export const MaskInput = ({
  name,
  control,
  label,
  variant = "standard",
  disabled = false,
  size = "small",
  inputVariant,
  setValue,
}: MaskInputs<z.infer<typeof peopleSchema>>) => {
  const handleMaskCPF = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (value.length > 18) return;
    return setValue("cpf", maskCPF(value));
  };

  const handleMaskPhoneNumber = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (value.length > 15) return;
    return setValue("phone", maskPhoneNumber(value));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size}
          error={!!error}
          onChange={
            inputVariant === "cpf" ? handleMaskCPF : handleMaskPhoneNumber
          }
          value={value}
          fullWidth
          label={label}
          variant={variant}
          disabled={disabled}
        />
      )}
    />
  );
};

export const MaskPhoneNumberInput = ({
  name,
  control,
  label,
  variant = "standard",
  disabled = false,
  size = "small",
  setValue,
}: MaskInputs<z.infer<typeof peopleSchema>>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size}
          error={!!error}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length > 15) return;
            return setValue("phone", maskPhoneNumber(value));
          }}
          value={value}
          fullWidth
          label={label}
          variant={variant}
          disabled={disabled}
        />
      )}
    />
  );
};
