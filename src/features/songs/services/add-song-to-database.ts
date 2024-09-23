import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Song, SongWithoutId } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const addSongToDatabase = async (songWithoutId: SongWithoutId) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.post("http://localhost:5000/songs", songWithoutId);
    };

    const { data } = await toast.promise(withDelay(), {
      loading: `Salvando música...`,
      success: `Música salva no banco de dados!`,
      error: `Erro ao adicionar ${songWithoutId.name} ao banco de dados.`,
    });

    const createdSong: Song = {
      ...songWithoutId,
      id: data.id as string,
    };

    return createdSong;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
    console.log(error);
  }
};
