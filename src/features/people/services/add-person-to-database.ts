import { z } from "zod";
import { personSchema } from "../schemas";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Person } from "../types";
import { simulateServerDelay } from "@/src/utils";
import { verifyCPF } from "./verify-cpf";
import { verifyPhone } from "./verify-phone";
import { verifyEmail } from "./verify-email";

export const addPersonToDatabase = async (
  person: z.infer<typeof personSchema>
) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      await Promise.all([
        verifyCPF(person.cpf),
        verifyPhone(person.phone),
        verifyEmail(person.email),
      ]);
      return await axios.post("http://localhost:5000/people", person);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Salvando informações...`,
      success: `Informações salvas no banco de dados!`,
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
