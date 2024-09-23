import { createFileRoute } from "@tanstack/react-router";

import FavoriteMoviesList from "@/src/features/movies/components/favorite-movies-list";
import MoviesDataGrid from "@/src/features/movies/components/movies-data-table";

export const Route = createFileRoute("/filmes/")({
  component: MoviesComponent,
});

function MoviesComponent() {
  return (
    <>
      <MoviesDataGrid />
      <FavoriteMoviesList variant="md" className="xl:!mt-0" />
    </>
  );
}
