import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Person } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const deletePersonOnDatabase = async (personId: string) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.delete(`http://localhost:5000/people/${personId}`);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Removendo informações do banco de dados...`,
      success: `Informações removidas do banco de dados!`,
      error: `Erro ao remover informações do banco de dados.`,
    });

    return data.data as Person;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
    console.log(error);
  }
};
