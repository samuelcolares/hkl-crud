import { useReducer } from "react";
import { Movie } from "../types";
import toast from "react-hot-toast";

type Action =
  | { type: "add"; payload: Movie }
  | { type: "remove"; payload: Movie }
  | { type: "update"; payload: Movie }
  | { type: "reset" };

function getInitialState() {
  const storedState = localStorage.getItem("favoriteMovies");
  const result = storedState ? JSON.parse(storedState) : [];
  return result as Movie[];
}

function updateLocalStorage(movie: Movie[]) {
  localStorage.setItem("favoriteMovies", JSON.stringify(movie));
}

function addToLocalStorage(state: Movie[], payload: Movie) {
  const newState = [...state, payload];
  updateLocalStorage([...state, payload]);
  return newState;
}

function updateOnLocalStorage(state: Movie[], payload: Movie) {
  const toUpdate = [...state];
  const id = payload.id;
  const index = toUpdate.findIndex((movie) => movie.id === id);
  if (index !== -1) toUpdate[index] = payload;
  updateLocalStorage(toUpdate);
  return toUpdate;
}

function removeOnLocalStorage(state: Movie[], payload: Movie) {
  const newState = state.filter((item) => item.id !== payload.id);
  updateLocalStorage(newState);
  return newState;
}

function resetLocalStorage() {
  updateLocalStorage([]);
  return [];
}

function reducer(state: Movie[], action: Action) {
  if (action.type === "add") return addToLocalStorage(state, action.payload);
  if (action.type === "remove")
    return removeOnLocalStorage(state, action.payload);
  if (action.type === "update")
    return updateOnLocalStorage(state, action.payload);
  if (action.type === "reset") return resetLocalStorage();

  return state;
}

export const useFavoriteMovies = () => {
  const [state, dispatch] = useReducer(reducer, [], getInitialState);

  const favoriteMovie = (movie: Movie) => {
    const alredyExists = isMovieFavorited(movie);
    if (alredyExists) {
      dispatch({
        type: "remove",
        payload: movie,
      });
      return toast("Removido dos favoritos", {
        icon: "😭",
      });
    }
    dispatch({
      type: "add",
      payload: movie,
    });
    return toast.success("Adicionado aos favoritos", {
      icon: "⭐",
    });
  };

  const resetFavoriteMovies = () => dispatch({ type: "reset" });

  const removeMovieOnLocalStorage = (movie: Movie | undefined) => {
    if (!movie) return;
    const exists = isMovieFavorited(movie);
    if (exists) {
      dispatch({
        type: "remove",
        payload: movie,
      });
    }
  };

  const updateMovieOnLocalStorage = (movie: Movie | undefined) => {
    if (!movie) return;
    const exists = isMovieFavorited(movie);
    if (exists) {
      dispatch({
        type: "update",
        payload: movie,
      });
    }
  };

  const isMovieFavorited = (movie: Movie) =>
    state.some((item) => item.id === movie.id);

  return {
    favoriteMovies: state,
    favoriteMovie,
    resetFavoriteMovies,
    updateMovieOnLocalStorage,
    isMovieFavorited,
    removeMovieOnLocalStorage,
  };
};
