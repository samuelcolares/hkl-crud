import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Person, PersonWithoutId } from "../types";
import { simulateServerDelay } from "@/src/utils";
import { verifyCPF } from "./verify-cpf";
import { verifyPhone } from "./verify-phone";
import { verifyEmail } from "./verify-email";

export const addPersonToDatabase = async (personWithoutId: PersonWithoutId) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      await Promise.all([
        verifyCPF(personWithoutId.cpf),
        verifyPhone(personWithoutId.phone),
        verifyEmail(personWithoutId.email),
      ]);
      return await axios.post("http://localhost:5000/people", personWithoutId);
    };

    const { data } = await toast.promise(withDelay(), {
      loading: `Salvando informações...`,
      success: `Informações salvas no banco de dados!`,
      error: `Erro ao adicionar ${personWithoutId.name} ao banco de dados.`,
    });

    const createdPerson: Person = {
      id: data.id as string,
      ...personWithoutId,
    };

    return createdPerson;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
    console.log(error);
  }
};
