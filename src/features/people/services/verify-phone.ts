import axios, { AxiosError } from "axios";
import { Person } from "../types/";
import toast from "react-hot-toast";

const errorMessage =
  "Número de telefone já cadastrado. Por favor, insira outro número.";

export const verifyPhone = async (phoneNumber: string) => {
  try {
    const { data } = await axios.get<Person[]>("http://localhost:5000/people");
    const phoneExists = data.some((person) => person.phone === phoneNumber);
    if (phoneExists) {
      toast.error(errorMessage);
      return Promise.reject(new Error(errorMessage));
    }
  } catch (error: any) {
    toast.error(error.message);
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
  }
};
