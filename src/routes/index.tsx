import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@mui/material";
import usePeople from "../features/people/hooks/use-people.hook";
import PeopleDataGrid from "../features/people/components/people-data-table";
import PeopleDialog from "../features/people/components/people-form";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { people, status } = usePeople();
  return (
    <Container maxWidth={"lg"} className="space-y-2 mt-12">
      <PeopleDataGrid />
      <PeopleDialog variant="add" />
    </Container>
  );
}
