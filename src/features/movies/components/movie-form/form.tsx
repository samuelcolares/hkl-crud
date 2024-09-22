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
import AddIcon from "@mui/icons-material/Movie";
import EditIcon from "@mui/icons-material/Edit";

// Types & Schemas
import { Movie } from "../../types";
import { movieSchema } from "../../schemas";
import useMovies from "../../hooks/use-movies.hook";
import { movieGenres } from "@/src/utils/constants";

const emptyValues: z.infer<typeof movieSchema> = {
  title: "",
  genre: "",
};

const MovieForm = ({ defaultValues }: { defaultValues?: Movie }) => {
  const { addMovie, editMovie } = useMovies();
  const { loading, startLoading, stopLoading } = useLoading();
  const { handleSubmit, control, setValue } = useForm<
    z.infer<typeof movieSchema>
  >({
    resolver: zodResolver(movieSchema),
    defaultValues: defaultValues
      ? {
          title: defaultValues.title,
          genre: defaultValues.genre,
        }
      : emptyValues,
  });

  const buttonLabel = defaultValues ? "Editar" : "Adicionar";
  const Icon = defaultValues ? <EditIcon /> : <AddIcon />;

  const onSubmit = async (values: z.infer<typeof movieSchema>) => {
    try {
      startLoading();

      if (!defaultValues) {
        return await addMovie(values);
      }

      return await editMovie({
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
      <Stack className="gap-4 flex-1">
        <SelectGenreInput
          control={control}
          name="genre"
          label="Gênero"
          genreArray={movieGenres}
          setValue={setValue}
          type="movie"
        />
        <Input control={control} name="title" label="Título" />
      </Stack>

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

export default MovieForm;
