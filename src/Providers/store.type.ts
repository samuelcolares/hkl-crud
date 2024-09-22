import { Person } from "../features/people/types";

export type StoreContext = {
  favoritePeople: Person[];
  isPersonFavorited: (person: Person) => boolean;
  favoritePerson: (person: Person) => void;
  resetFavoritePeople: () => void;
  updatePersonOnLocalStorage: (person: Person | undefined) => void;
  removePersonOnLocalStorage: (person: Person | undefined) => void;
  // favoriteMusic
  // favoriteMovies
};
