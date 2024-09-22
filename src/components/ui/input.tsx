import {
  Controller,
  FieldValues,
  UseFormSetValue,
  Control,
} from "react-hook-form";
import TextField from "@mui/material/TextField";
import { maskCPF, maskPhoneNumber } from "@/src/utils";
import { z } from "zod";
import { personSchema } from "@/src/features/people/schemas";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { songSchema } from "@/src/features/songs/schemas";
import OutlinedInput from "@mui/material/OutlinedInput";
import { movieSchema } from "@/src/features/movies/schemas";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type SongSchema = z.infer<typeof songSchema>;
type MovieSchema = z.infer<typeof movieSchema>;
type Action =
  | { type: "movie"; setValue: UseFormSetValue<MovieSchema> }
  | { type: "song"; setValue: UseFormSetValue<SongSchema> };

type SelectInputs = FormInputProps &
  Action & {
    genreArray: string[];
  };

export const SelectGenreInput: React.FC<SelectInputs> = ({
  control,
  name,
  type,
  setValue,
  label,
  disabled = false,
  size = "small",
  variant = "standard",
  genreArray,
}) => {
  const handleChange = (e: SelectChangeEvent) => {
    const value = e.target.value as string;
    if (type === "movie") return setValue("genre", value);
    if (type === "song") return setValue("genre", value);
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className="text-white as">
              {label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label={label}
              size={size}
              variant={"outlined"}
              disabled={disabled}
              onChange={handleChange}
              className="text-white p-2 rounded-md border-white"
              MenuProps={MenuProps}
              sx={{
                maxHeight: 200,
                overflow: `auto`,
                "& .css-1xomo8h-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                  background: "#000",
                },
              }}
              // input={<OutlinedInput />}
            >
              {genreArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
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
}: MaskInputs<z.infer<typeof personSchema>>) => {
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
}: MaskInputs<z.infer<typeof personSchema>>) => {
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
