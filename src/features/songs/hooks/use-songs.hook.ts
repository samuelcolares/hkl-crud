import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Song } from "../types";
import { songSchema } from "../schemas";
import { z } from "zod";

import { useStore } from "@/src/Providers/store-provider";
import { addSongToDatabase } from "../services/add-song-to-database";
import { getSongs } from "../queries/get-songs";
import { editSongOnDatabase } from "../services/edit-song-on-database";
import { deleteSongOnDatabase } from "../services/delete-song-on-database";

const useSongs = () => {
  const queryClient = useQueryClient();
  const { updateSongOnLocalStorage, removeSongOnLocalStorage } = useStore();
  const { data: songs = [], status } = useQuery<Song[], Error>({
    queryKey: ["songs"],
    queryFn: getSongs,
    staleTime: Infinity,
  });

  const addSong = async (song: z.infer<typeof songSchema>) => {
    const newSong = await addSongToDatabase(song);
    addSongLocal(newSong);
  };

  const addSongLocal = (song: Song | undefined) => {
    if (!song) return;
    return queryClient.setQueryData(["songs"], (old: Song[] = []) => {
      return [song, ...old];
    });
  };

  const editSong = async (song: Song) => {
    const editedSong = await editSongOnDatabase(song);
    editSongLocal(editedSong);
    updateSongOnLocalStorage(editedSong);
  };

  const editSongLocal = (song: Song | undefined) => {
    if (!song) return;
    return queryClient.setQueryData(["songs"], (old: Song[] = []) => {
      const updatedPeople = [...old];
      const index = updatedPeople.findIndex(
        (oldSong) => oldSong.id === song.id
      );

      updatedPeople[index] = song;

      return updatedPeople;
    });
  };

  const deleteSong = async (personId: string) => {
    await deleteSongOnDatabase(personId);
    deleteSongLocal(personId);
  };

  const deleteSongLocal = (personId: string | undefined) => {
    if (!personId) return;
    return queryClient.setQueryData(["songs"], (old: Song[] = []) => {
      const updatedPeople = [...old];
      const index = updatedPeople.findIndex(
        (oldSong) => oldSong.id === personId
      );
      removeSongOnLocalStorage(updatedPeople[index]);
      updatedPeople.splice(index, 1);

      return updatedPeople;
    });
  };

  return {
    status,
    songs,
    addSong,
    editSong,
    deleteSong,
  };
};

export default useSongs;
