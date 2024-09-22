import { createFileRoute } from "@tanstack/react-router";
import { Box, Container, Stack } from "@mui/material";
import FavoriteMoviesList from "@/src/features/movies/components/favorite-movies-list";
import MoviesDataGrid from "@/src/features/movies/components/movies-data-table";
import MovieDialog from "@/src/features/movies/components/movie-form";

export const Route = createFileRoute("/filmes/")({
  component: MoviesComponent,
});

function MoviesComponent() {
  return (
    <Container maxWidth={"xl"} className="space-y-2 mt-12">
      <Stack direction={"row"} spacing={2}>
        <Box className="space-y-2 flex-1">
          <MoviesDataGrid />
          <MovieDialog variant="add" />
        </Box>
        <FavoriteMoviesList variant="md" />
      </Stack>
    </Container>
  );
}
