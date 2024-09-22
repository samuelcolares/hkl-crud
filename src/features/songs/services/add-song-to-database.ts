import { z } from "zod";
import { songSchema } from "../schemas";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Song } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const addSongToDatabase = async (song: z.infer<typeof songSchema>) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.post("http://localhost:5000/songs", song);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Salvando música...`,
      success: `Música salva no banco de dados!`,
      error: `Erro ao adicionar ${song.name} ao banco de dados.`,
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
