import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import useAvatars from "@/src/features/people/hooks/use-avatars.hook";
import { Avatar, Container } from "@mui/material";
import FavoritePeopleList from "@/src/features/people/components/favorite-people-list";
import PeopleDataGrid from "@/src/features/people/components/people-data-table";
import PeopleDialog from "@/src/features/people/components/people-form";

export const Route = createFileRoute("/pessoas/")({
  component: PeopleComponent,
});

function PeopleComponent() {
  return (
    <Container maxWidth={"lg"} className="space-y-2 mt-12">
      <PeopleDataGrid />
      <PeopleDialog variant="add" />
      <FavoritePeopleList variant="md"/>
    </Container>
  );
}
