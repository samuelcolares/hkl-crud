import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import useAvatars from "@/src/features/people/hooks/use-avatars.hook";
import { Avatar, Box, Container, Stack } from "@mui/material";
import FavoritePeopleList from "@/src/features/people/components/favorite-people-list";
import PeopleDataGrid from "@/src/features/people/components/people-data-table";
import PersonDialog from "@/src/features/people/components/person-form";

export const Route = createFileRoute("/pessoas/")({
  component: PeopleComponent,
});

function PeopleComponent() {
  return (
    <Container maxWidth={"xl"} className="space-y-2 mt-12">
      <Stack direction={"row"} spacing={2}>
        <Box className="space-y-2 flex-1">
          <PeopleDataGrid />
          <PersonDialog variant="add" />
        </Box>
        <FavoritePeopleList variant="md" />
      </Stack>
    </Container>
  );
}
