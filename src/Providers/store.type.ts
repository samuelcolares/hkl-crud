import { Person } from "../features/people/types";
import { Status } from "../types";

export type StoreContext = {
  people: Person[];
  peopleStatus: Status;
  favoritePeople: Person[];
  isPersonFavorited: (person: Person) => boolean;
  favoritePerson: (person: Person) => void;
  resetFavoritePeople: () => void;
  updatePersonOnLocalStorage: (person: Person | undefined) => void;
  removePersonOnLocalStorage: (person: Person | undefined) => void;
  // favoriteMusic
  // favoriteMovies
};
