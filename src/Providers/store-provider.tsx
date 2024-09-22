import { createContext, useContext } from "react";
import { StoreContext as StoreType } from "./store.type";
import { useFavoritePeople } from "../features/people/hooks/use-favorite-people.hook";
import usePeople from "../features/people/hooks/use-people.hook";
import { useFavoriteSongs } from "../features/songs/hooks/use-favorite-songs.hook";
import useSongs from "../features/songs/hooks/use-songs.hook";

const StoreContext = createContext<StoreType>({} as StoreType);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    favoritePeople,
    favoritePerson,
    resetFavoritePeople,
    updatePersonOnLocalStorage,
    isPersonFavorited,
    removePersonOnLocalStorage,
  } = useFavoritePeople();

  const {
    favoriteSong,
    favoriteSongs,
    isSongFavorited,
    removeSongOnLocalStorage,
    resetFavoriteSongs,
    updateSongOnLocalStorage,
  } = useFavoriteSongs();

  const { people, status: peopleStatus } = usePeople();
  const { songs, status: songsStatus } = useSongs();

  return (
    <StoreContext.Provider
      value={{
        people,
        peopleStatus,
        favoritePeople,
        isPersonFavorited,
        favoritePerson,
        resetFavoritePeople,
        updatePersonOnLocalStorage,
        removePersonOnLocalStorage,
        favoriteSong,
        favoriteSongs,
        isSongFavorited,
        removeSongOnLocalStorage,
        resetFavoriteSongs,
        songs,
        songsStatus,
        updateSongOnLocalStorage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
