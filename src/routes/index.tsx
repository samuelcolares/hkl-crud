import { createFileRoute } from "@tanstack/react-router";
import { Container, Stack } from "@mui/material";
import PeopleDataGrid from "../features/people/components/people-data-table";
import PersonDialog from "../features/people/components/person-form";
import FavoritePeopleList from "../features/people/components/favorite-people-list";
import FavoriteSongsList from "../features/songs/components/favorite-songs-list";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <Container maxWidth={"lg"} className="space-y-2 mt-12">
      <Stack direction={"row"} spacing={4}>
        <FavoritePeopleList variant="lg" />
        <FavoriteSongsList variant="lg" />
      </Stack>
    </Container>
  );
}
