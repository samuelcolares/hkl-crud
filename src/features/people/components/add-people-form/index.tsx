import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { validCPF } from "@/src/utils";
import systemMessages from "@/src/utils/constants";
import { Input, MaskCPFInput } from "@/src/components/ui/input";
import { Box, Button } from "@mui/material";
import { useLoading } from "@/src/hooks/convinient-states.hooks";
import toast from "react-hot-toast";

export const peopleSchema = z.object({
  name: z
    .string({ required_error: systemMessages.required.name })
    .min(4, { message: systemMessages.minCharacteres.name }),
  cpf: z
    .string({ required_error: systemMessages.required.cpf })
    .refine(
      (fiscalId: string) =>
        validCPF(fiscalId.replace(/\./g, "").replace(/-/g, "")),
      systemMessages.error.cpf
    ),
  email: z.string().email(),
  phone: z.string(),
});

const PeopleForm = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const { handleSubmit, control, setValue } = useForm<
    z.infer<typeof peopleSchema>
  >({
    resolver: zodResolver(peopleSchema),
    defaultValues: {
      cpf: "607.159.353-05",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof peopleSchema>) => {
    try {
      startLoading();

      await toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
        loading: "Carregando",
        success: "Salvo",
        error: "Erro",
      });

      stopLoading();
    } catch (error) {}
    console.log(values);
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
        endIcon={loading ? <LoaderCircle /> : <AddIcon />}
        fullWidth
        className="disabled:text-white disabled:opacity-70 disabled:bg-white/30 bg-primary"
      >
        Adicionar
      </Button>
    </Box>
  );
};

export default PeopleForm;
import AddIcon from "@mui/icons-material/PersonAddAlt1";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";
