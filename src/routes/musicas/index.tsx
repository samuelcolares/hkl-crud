import { createFileRoute } from "@tanstack/react-router";

import SongsDataGrid from "@/src/features/songs/components/songs-data-table";
import FavoriteSongsList from "@/src/features/songs/components/favorite-songs-list";

export const Route = createFileRoute("/musicas/")({
  component: SongsComponent,
});

function SongsComponent() {
  return (
    <>
      <SongsDataGrid />
      <FavoriteSongsList variant="md" className="xl:!mt-0" />
    </>
  );
}
