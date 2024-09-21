import { z } from "zod";
import { peopleSchema } from "../schemas";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Person } from "../types/person";
import { simulateServerDelay } from "@/src/utils";

export const addPersonToDatabase = async (
  person: z.infer<typeof peopleSchema>
) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.post("http://localhost:5000/people", person);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Salvando as informações de ${person.name}...`,
      success: `${person.name} adicionada ao banco de dados!`,
      error: `Erro ao adicionar ${person.name} ao banco de dados.`,
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
