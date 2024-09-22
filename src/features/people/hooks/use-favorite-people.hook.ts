import { useReducer } from "react";
import { Person } from "../types";
import toast from "react-hot-toast";

type Action =
  | { type: "add"; payload: Person }
  | { type: "remove"; payload: Person }
  | { type: "update"; payload: Person }
  | { type: "reset" };

function checkPersonOnLocalStorage(person: Person) {
  const localStorage = getInitialState();
  return localStorage.some((item) => item.id === person.id);
}

function getInitialState() {
  const storedState = localStorage.getItem("favoritePeople");
  const result = storedState ? JSON.parse(storedState) : [];
  return result as Person[];
}

function updateLocalStorage(person: Person[]) {
  localStorage.setItem("favoritePeople", JSON.stringify(person));
}

function addToLocalStorage(state: Person[], payload: Person) {
  const newState = [...state, payload];
  updateLocalStorage([...state, payload]);
  return newState;
}

function updateOnLocalStorage(state: Person[], payload: Person) {
  const toUpdate = [...state];
  const id = payload.id;
  const index = toUpdate.findIndex((person) => person.id === id);
  if (index !== -1) toUpdate[index] = payload;
  updateLocalStorage(toUpdate);
  return toUpdate;
}

function removeOnLocalStorage(state: Person[], payload: Person) {
  const newState = state.filter((item) => item.id !== payload.id);
  updateLocalStorage(newState);
  return newState;
}

function resetLocalStorage() {
  updateLocalStorage([]);
  return [];
}

function reducer(state: Person[], action: Action) {
  if (action.type === "add") return addToLocalStorage(state, action.payload);
  if (action.type === "remove")
    return removeOnLocalStorage(state, action.payload);
  if (action.type === "update")
    return updateOnLocalStorage(state, action.payload);
  if (action.type === "reset") return resetLocalStorage();

  return state;
}

export const useFavoritePeople = () => {
  const [state, dispatch] = useReducer(reducer, [], getInitialState);

  const favoritePerson = (person: Person) => {
    const alredyExists = isPersonFavorited(person);
    if (alredyExists) {
      dispatch({
        type: "remove",
        payload: person,
      });
      return toast("Removido dos favoritos", {
        icon: "😭",
      });
    }
    dispatch({
      type: "add",
      payload: person,
    });
    return toast.success("Adicionado aos favoritos", {
      icon: "⭐",
    });
  };

  const resetFavoritePeople = () => dispatch({ type: "reset" });

  const removePersonOnLocalStorage = (person: Person | undefined) => {
    if (!person) return;
    const exists = isPersonFavorited(person);
    if (exists) {
      dispatch({
        type: "remove",
        payload: person,
      });
    }
  };

  const updatePersonOnLocalStorage = (person: Person | undefined) => {
    if (!person) return;
    const exists = isPersonFavorited(person);
    if (exists) {
      dispatch({
        type: "update",
        payload: person,
      });
    }
  };

  const isPersonFavorited = (person: Person) =>
    state.some((item) => item.id === person.id);

  return {
    favoritePeople: state,
    favoritePerson,
    resetFavoritePeople,
    updatePersonOnLocalStorage,
    isPersonFavorited,
    removePersonOnLocalStorage,
  };
};
