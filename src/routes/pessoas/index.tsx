import { createFileRoute } from "@tanstack/react-router";

import FavoritePeopleList from "@/src/features/people/components/favorite-people-list";
import PeopleDataGrid from "@/src/features/people/components/people-data-table";

export const Route = createFileRoute("/pessoas/")({
  component: PeopleComponent,
});

function PeopleComponent() {
  return (
    <>
      <PeopleDataGrid />
      <FavoritePeopleList variant="md" className="xl:!mt-0" />
    </>
  );
}
