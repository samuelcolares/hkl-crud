import axios, { AxiosError } from "axios";
import { Person } from "../types/";
import toast from "react-hot-toast";

const errorMessage = "E-mail já cadastrado.";

export const verifyEmail = async (email: string) => {
  try {
    const { data } = await axios.get<Person[]>("http://localhost:5000/people");
    const emailExists = data.some((person) => person.email === email);
    if (emailExists) {
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
