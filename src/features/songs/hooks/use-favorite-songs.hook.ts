import { useReducer } from "react";
import { Song } from "../types";
import toast from "react-hot-toast";

type Action =
  | { type: "add"; payload: Song }
  | { type: "remove"; payload: Song }
  | { type: "update"; payload: Song }
  | { type: "reset" };

function getInitialState() {
  const storedState = localStorage.getItem("favoriteSongs");
  const result = storedState ? JSON.parse(storedState) : [];
  return result as Song[];
}

function updateLocalStorage(song: Song[]) {
  localStorage.setItem("favoriteSongs", JSON.stringify(song));
}

function addToLocalStorage(state: Song[], payload: Song) {
  const newState = [...state, payload];
  updateLocalStorage([...state, payload]);
  return newState;
}

function updateOnLocalStorage(state: Song[], payload: Song) {
  const toUpdate = [...state];
  const id = payload.id;
  const index = toUpdate.findIndex((song) => song.id === id);
  if (index !== -1) toUpdate[index] = payload;
  updateLocalStorage(toUpdate);
  return toUpdate;
}

function removeOnLocalStorage(state: Song[], payload: Song) {
  const newState = state.filter((item) => item.id !== payload.id);
  updateLocalStorage(newState);
  return newState;
}

function resetLocalStorage() {
  updateLocalStorage([]);
  return [];
}

function reducer(state: Song[], action: Action) {
  if (action.type === "add") return addToLocalStorage(state, action.payload);
  if (action.type === "remove")
    return removeOnLocalStorage(state, action.payload);
  if (action.type === "update")
    return updateOnLocalStorage(state, action.payload);
  if (action.type === "reset") return resetLocalStorage();

  return state;
}

export const useFavoriteSongs = () => {
  const [state, dispatch] = useReducer(reducer, [], getInitialState);

  const favoriteSong = (song: Song) => {
    const alredyExists = isSongFavorited(song);
    if (alredyExists) {
      dispatch({
        type: "remove",
        payload: song,
      });
      return toast("Removido dos favoritos", {
        icon: "😭",
      });
    }
    dispatch({
      type: "add",
      payload: song,
    });
    return toast.success("Adicionado aos favoritos", {
      icon: "⭐",
    });
  };

  const resetFavoriteSongs = () => dispatch({ type: "reset" });

  const removeSongOnLocalStorage = (song: Song | undefined) => {
    if (!song) return;
    const exists = isSongFavorited(song);
    if (exists) {
      dispatch({
        type: "remove",
        payload: song,
      });
    }
  };

  const updateSongOnLocalStorage = (song: Song | undefined) => {
    if (!song) return;
    const exists = isSongFavorited(song);
    if (exists) {
      dispatch({
        type: "update",
        payload: song,
      });
    }
  };

  const isSongFavorited = (song: Song) =>
    state.some((item) => item.id === song.id);

  return {
    favoriteSongs: state,
    favoriteSong,
    resetFavoriteSongs,
    updateSongOnLocalStorage,
    isSongFavorited,
    removeSongOnLocalStorage,
  };
};
