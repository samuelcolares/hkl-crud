import axios, { AxiosError } from "axios";
import { Person } from "../types/";
import toast from "react-hot-toast";

const errorMessage = "CPF já cadastrado.";

export const verifyCPF = async (CPF: string) => {
  try {
    const { data } = await axios.get<Person[]>("http://localhost:5000/people");
    const cpfExists = data.some((person) => person.cpf === CPF);
    if (cpfExists) {
      toast.error(errorMessage);
      return Promise.reject(new Error(errorMessage));
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
  }
};
