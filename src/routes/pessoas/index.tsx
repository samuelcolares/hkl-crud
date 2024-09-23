import { createFileRoute } from "@tanstack/react-router";

import { Container, Stack } from "@mui/material";
import FavoritePeopleList from "@/src/features/people/components/favorite-people-list";
import PeopleDataGrid from "@/src/features/people/components/people-data-table";

export const Route = createFileRoute("/pessoas/")({
  component: PeopleComponent,
});

function PeopleComponent() {
  return (
    <Container maxWidth={"xl"} className="space-y-2 mt-4 lg:mt-12">
      <Stack
        direction={{ lg: "column", xl: "row" }}
        spacing={2}
        className="space-y-4"
      >
        <PeopleDataGrid />

        <FavoritePeopleList variant="md" className="xl:!mt-0" />
      </Stack>
    </Container>
  );
}
