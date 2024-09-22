import { Person } from "../features/people/types";
import { Song } from "../features/songs/types";
import { Status } from "../types";

type PersonContext = {
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

type SongsContext = {
  songs: Song[];
  songsStatus: Status;
  favoriteSongs: Song[];
  isSongFavorited: (song: Song) => boolean;
  favoriteSong: (song: Song) => void;
  resetFavoriteSongs: () => void;
  updateSongOnLocalStorage: (song: Song | undefined) => void;
  removeSongOnLocalStorage: (song: Song | undefined) => void;
};

export type StoreContext = PersonContext & SongsContext & {
  // favoriteMusic
  // favoriteMovies
};
