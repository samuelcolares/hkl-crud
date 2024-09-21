import { createFileRoute } from "@tanstack/react-router";
import PeopleForm from "../features/people/components/add-people-form";
import { Container } from "@mui/material";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="">
      <Container maxWidth={"sm"}>
        <PeopleForm />
      </Container>
    </div>
  );
}
