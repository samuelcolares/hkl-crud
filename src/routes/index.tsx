import { createFileRoute } from "@tanstack/react-router";
import FavoritePeopleList from "../features/people/components/favorite-people-list";
import FavoriteSongsList from "../features/songs/components/favorite-songs-list";
import FavoriteMoviesList from "../features/movies/components/favorite-movies-list";
import { useMediaQuery } from "../hooks/use-media-query.hook";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});
const desktop = "(min-width: 1200px)";

function HomeComponent() {
  const isDesktop = useMediaQuery(desktop);
  return (
    <>
      <FavoritePeopleList variant={isDesktop ? "lg" : "md"} />
      <FavoriteMoviesList variant={isDesktop ? "lg" : "md"} />
      <FavoriteSongsList variant={isDesktop ? "lg" : "md"} />
    </>
  );
}
