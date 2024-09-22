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
    <Container maxWidth={"lg"} className="space-y-2 mt-12">
      <Stack direction={"row"} spacing={4}>
        <FavoritePeopleList variant="lg" />
        <FavoriteSongsList variant="lg" />
        <FavoriteMoviesList variant="lg" />
      </Stack>
    </Container>
  );
}
