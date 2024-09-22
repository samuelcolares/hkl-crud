import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import useAvatars from "@/src/features/people/hooks/use-avatars.hook";
import { Avatar } from "@mui/material";

export const Route = createFileRoute("/people/")({
  component: PeopleComponent,
});

function PeopleComponent() {
  const { avatars, status } = useAvatars();
  if (status === "success") {
    return (
      <div className="flex flex-wrap gap-2 items-center">
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.id}
            alt={avatar.id.toString()}
            src={avatar.url}
            className="w-24 h-24"
          />
        ))}
      </div>
    );
  }
  return (
    <div className="p-2">
      <h3>People</h3>
    </div>
  );
}
