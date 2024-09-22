import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Song } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const editSongOnDatabase = async (song: Song) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.patch(
        `http://localhost:5000/songs/${song.id}`,
        song
      );
    };

    const data = await toast.promise(withDelay(), {
      loading: `Editando informações...`,
      success: `Informações editadas com sucesso!`,
      error: `Erro ao editar ${song.name} no banco de dados.`,
    });

    return data.data as Song;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
    console.log(error);
  }
};
