import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Person } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const editPersonOnDatabase = async (person: Person) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.patch(
        `http://localhost:5000/people/${person.id}`,
        person
      );
    };

    const data = await toast.promise(withDelay(), {
      loading: `Editando informações...`,
      success: `Informações editadas com sucesso!`,
      error: `Erro ao editar ${person.name} no banco de dados.`,
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
