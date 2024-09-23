// General
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Hooks
import { useForm } from "react-hook-form";
import { useLoading } from "@/src/hooks/convinient-states.hooks";

// Components
import { Input, MaskInput, SelectGenreInput } from "@/src/components/ui/input";
import { Box, Button, Stack } from "@mui/material";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";
import AddIcon from "@mui/icons-material/MusicNote";
import EditIcon from "@mui/icons-material/Edit";

// Types & Schemas
import { Song } from "../../types";
import { songSchema } from "../../schemas";
import useSongs from "../../hooks/use-songs.hook";
import { musicGenres } from "@/src/utils/constants";
import { generateTimestamp } from "@/src/utils";

const emptyValues: z.infer<typeof songSchema> = {
  name: "",
  genre: "",
  singerOrBand: "",
};

const SongForm = ({ defaultValues }: { defaultValues?: Song }) => {
  const { addSong, editSong } = useSongs();
  const { loading, startLoading, stopLoading } = useLoading();
  const { handleSubmit, control, setValue } = useForm<
    z.infer<typeof songSchema>
  >({
    resolver: zodResolver(songSchema),
    defaultValues: defaultValues
      ? {
          name: defaultValues.name,
          genre: defaultValues.genre,
          singerOrBand: defaultValues.singerOrBand,
        }
      : emptyValues,
  });

  const buttonLabel = defaultValues ? "Editar" : "Adicionar";
  const Icon = defaultValues ? <EditIcon /> : <AddIcon />;

  const onSubmit = async (values: z.infer<typeof songSchema>) => {
    try {
      startLoading();

      if (!defaultValues) {
        return await addSong(values);
      }

      return await editSong({
        id: defaultValues.id,
        createdAt: defaultValues.createdAt,
        updatedAt: generateTimestamp(),
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
      <Stack className="gap-4 flex-1">
        <SelectGenreInput
          control={control}
          name="genre"
          label="Gênero"
          genreArray={musicGenres}
          setValue={setValue}
          type="song"
        />
        <Input control={control} name="name" label="Nome" />
      </Stack>

      <Input control={control} name="singerOrBand" label="Cantor(a)/Banda" />

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

export default SongForm;
