// General
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Hooks
import { useForm } from "react-hook-form";
import { useLoading } from "@/src/hooks/convinient-states.hooks";

// Components
import { Input, MaskCPFInput } from "@/src/components/ui/input";
import { Box, Button } from "@mui/material";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";
import AddIcon from "@mui/icons-material/PersonAddAlt1";
import EditIcon from "@mui/icons-material/Edit";

// Utils & Services
import { addPersonToDatabase } from "../../services/add-person-to-database";

// Types & Schemas
import { Person } from "../../types/person";
import { peopleSchema } from "../../schemas";

const emptyValues: z.infer<typeof peopleSchema> = {
  cpf: "",
  email: "",
  name: "",
  phone: "",
};

const PeopleForm = ({ defaultValues }: { defaultValues?: Person }) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { handleSubmit, control, setValue } = useForm<
    z.infer<typeof peopleSchema>
  >({
    resolver: zodResolver(peopleSchema),
    defaultValues: defaultValues
      ? {
          name: defaultValues.name,
          email: defaultValues.email,
          cpf: defaultValues.cpf,
          phone: defaultValues.phone,
        }
      : emptyValues,
  });

  const buttonLabel = defaultValues ? "Editar" : "Adicionar";
  const Icon = defaultValues ? <EditIcon /> : <AddIcon />;

  const onSubmit = async (values: z.infer<typeof peopleSchema>) => {
    try {
      startLoading();

      if (defaultValues) {
        //TODO: await EditPersonOnDatabase(values);
      }

      const person = await addPersonToDatabase(values);
      // TODO: Add to global context API to state manegement
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
      <Input control={control} name="name" label="Nome" />
      <Input control={control} name="email" label="E-mail" />
      <Box component={"div"} className="flex gap-4">
        <MaskCPFInput
          control={control}
          name="cpf"
          label="CPF"
          setValue={setValue}
        />
        <Input control={control} name="phone" label="Telefone" />
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

export default PeopleForm;
