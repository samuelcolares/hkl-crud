import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Box, Container, Stack } from "@mui/material";
import SongsDataGrid from "@/src/features/songs/components/songs-data-table";
import FavoriteSongsList from "@/src/features/songs/components/favorite-songs-list";
import SongDialog from "@/src/features/songs/components/song-form";

export const Route = createFileRoute("/musicas/")({
  component: SongsComponent,
});

function SongsComponent() {
  return (
    <Container maxWidth={"xl"} className="space-y-2 mt-12">
      <Stack direction={"row"} spacing={2}>
        <Box className="space-y-2 flex-1">
          <SongsDataGrid />
          <SongDialog variant="add" />
        </Box>
        <FavoriteSongsList variant="md" />
      </Stack>
    </Container>
  );
}
