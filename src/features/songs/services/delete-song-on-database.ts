import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Song } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const deleteSongOnDatabase = async (songId: string) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.delete(`http://localhost:5000/songs/${songId}`);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Removendo música do banco de dados...`,
      success: `Música removida do banco de dados!`,
      error: `Erro ao remover música do banco de dados.`,
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
