import { createFileRoute } from "@tanstack/react-router";
import { Container, Stack } from "@mui/material";
import FavoritePeopleList from "../features/people/components/favorite-people-list";
import FavoriteSongsList from "../features/songs/components/favorite-songs-list";
import FavoriteMoviesList from "../features/movies/components/favorite-movies-list";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <FavoritePeopleList variant="lg" />
      <FavoriteMoviesList variant="lg" />
      <FavoriteSongsList variant="lg" />
    </>
  );
}
