import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@mui/material";
import PeopleDataGrid from "../features/people/components/people-data-table";
import PeopleDialog from "../features/people/components/people-form";
import FavoritePeopleList from "../features/people/components/favorite-people-list";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <Container maxWidth={"lg"} className="space-y-2 mt-12">
      <FavoritePeopleList variant="lg" />
    </Container>
  );
}
