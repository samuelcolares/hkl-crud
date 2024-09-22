// General
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Hooks
import { useForm } from "react-hook-form";
import { useLoading } from "@/src/hooks/convinient-states.hooks";
import usePeople from "../../hooks/use-people.hook";
import useAvatars from "../../hooks/use-avatars.hook";

// Components
import { Input, MaskInput } from "@/src/components/ui/input";
import { Box, Button, Stack } from "@mui/material";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";
import AddIcon from "@mui/icons-material/PersonAddAlt1";
import EditIcon from "@mui/icons-material/Edit";
import AvatarsDialog from "./avatar-dialog";

// Types & Schemas
import { Person } from "../../types";
import { personSchema } from "../../schemas";
import { verifyCPF } from "../../services/verify-cpf";
import { verifyPhone } from "../../services/verify-phone";
import { verifyEmail } from "../../services/verify-email";

const emptyValues: z.infer<typeof personSchema> = {
  cpf: "",
  email: "",
  name: "",
  phone: "",
  avatarUrl: "",
};

const PersonForm = ({ defaultValues }: { defaultValues?: Person }) => {
  const { avatars, status } = useAvatars();
  const { addPerson, editPerson } = usePeople();
  const { loading, startLoading, stopLoading } = useLoading();
  const { handleSubmit, control, setValue } = useForm<
    z.infer<typeof personSchema>
  >({
    resolver: zodResolver(personSchema),
    defaultValues: defaultValues
      ? {
          name: defaultValues.name,
          email: defaultValues.email,
          cpf: defaultValues.cpf,
          phone: defaultValues.phone,
          avatarUrl: defaultValues.avatarUrl,
        }
      : emptyValues,
  });

  const setAvatarUrl = (url: string) => {
    setValue("avatarUrl", url);
  };

  const buttonLabel = defaultValues ? "Editar" : "Adicionar";
  const Icon = defaultValues ? <EditIcon /> : <AddIcon />;

  const onSubmit = async (values: z.infer<typeof personSchema>) => {
    try {
      startLoading();

      if (!defaultValues) {
        return await addPerson(values);
      }

      if (defaultValues && defaultValues.cpf !== values.cpf) {
        await verifyCPF(values.cpf);
      }

      if (defaultValues && defaultValues.phone !== values.phone) {
        await verifyPhone(values.phone);
      }

      if (defaultValues && defaultValues.email !== values.email) {
        await verifyEmail(values.email);
      }

      return await editPerson({
        id: defaultValues.id,
        ...values,
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ border: 1, borderColor: "#494E55" }}
      className="space-y-4 p-4 rounded-md backdrop-blur-sm mt-8 border-2 border-primary"
    >
      <Stack direction={"row"} className="items-end" spacing={4}>
        <AvatarsDialog
          avatars={avatars}
          status={status}
          setAvatarUrl={setAvatarUrl}
          defaultAvatar={defaultValues?.avatarUrl}
        />
        <Stack className="gap-4 flex-1">
          <Input control={control} name="name" label="Nome" />
          <Input control={control} name="email" label="E-mail" />
        </Stack>
      </Stack>
      <Box component={"div"} className="flex gap-4">
        <MaskInput
          control={control}
          name="cpf"
          label="CPF"
          inputVariant="cpf"
          setValue={setValue}
        />
        <MaskInput
          control={control}
          name="phone"
          label="Telefone"
          inputVariant="phoneNumber"
          setValue={setValue}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        endIcon={loading ? <LoaderCircle /> : Icon}
        fullWidth
        className="disabled:text-white disabled:opacity-70 disabled:bg-white/30 bg-primary"
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default PersonForm;
