import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPeople } from "../queries/get-people";
import { Person } from "../types";
import { peopleSchema } from "../schemas";
import { z } from "zod";
import { addPersonToDatabase } from "../services/add-person-to-database";
import { editPersonOnDatabase } from "../services/edit-person-on-database";
import { deletePersonOnDatabase } from "../services/delete-person-on-database";
import { useStore } from "@/src/Providers/store-provider";

const usePeople = () => {
  const queryClient = useQueryClient();
  const {
    isPersonFavorited,
    updatePersonOnLocalStorage,
    removePersonOnLocalStorage,
  } = useStore();
  const { data: people = [], status } = useQuery<Person[], Error>({
    queryKey: ["people"],
    queryFn: getPeople,
  });

  const addPerson = async (person: z.infer<typeof peopleSchema>) => {
    const newPerson = await addPersonToDatabase(person);
    addPersonLocal(newPerson);
  };

  const addPersonLocal = (person: Person | undefined) => {
    if (!person) return;
    return queryClient.setQueryData(["people"], (old: Person[] = []) => {
      return [person, ...old];
    });
  };

  const editPerson = async (person: Person) => {
    const editedPerson = await editPersonOnDatabase(person);
    editPersonLocal(editedPerson);
    updatePersonOnLocalStorage(editedPerson);
  };

  const editPersonLocal = (person: Person | undefined) => {
    if (!person) return;
    return queryClient.setQueryData(["people"], (old: Person[] = []) => {
      const updatedPeople = [...old];
      const index = updatedPeople.findIndex(
        (oldPerson) => oldPerson.id === person.id
      );

      updatedPeople[index] = person;

      return updatedPeople;
    });
  };

  const deletePerson = async (personId: string) => {
    await deletePersonOnDatabase(personId);
    deletePersonLocal(personId);
  };

  const deletePersonLocal = (personId: string | undefined) => {
    if (!personId) return;
    return queryClient.setQueryData(["people"], (old: Person[] = []) => {
      const updatedPeople = [...old];
      const index = updatedPeople.findIndex(
        (oldPerson) => oldPerson.id === personId
      );
      removePersonOnLocalStorage(updatedPeople[index]);
      updatedPeople.splice(index, 1);

      return updatedPeople;
    });
  };

  return {
    status,
    people,
    addPerson,
    editPerson,
    deletePerson,
  };
};

export default usePeople;
