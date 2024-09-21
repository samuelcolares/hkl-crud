import {
  Controller,
  FieldValues,
  UseFormSetValue,
  Control,
} from "react-hook-form";
import TextField from "@mui/material/TextField";
import { maskCPF } from "@/src/utils";
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

type MaskCPFInputProps<T extends FieldValues> = FormInputProps & {
  setValue: UseFormSetValue<T>;
};

export const MaskCPFInput = ({
  name,
  control,
  label,
  variant = "standard",
  disabled = false,
  size = "small",
  setValue,
}: MaskCPFInputProps<z.infer<typeof peopleSchema>>) => {
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
            if (value.length > 18) return;
            return setValue("cpf", maskCPF(value));
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
