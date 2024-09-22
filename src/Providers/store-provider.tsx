import { createContext, useContext } from "react";
import { StoreContext as StoreType } from "./store.type";
import { useFavoritePeople } from "../features/people/hooks/use-favorite-people.hook";
import usePeople from "../features/people/hooks/use-people.hook";

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

  const { people, status: peopleStatus } = usePeople();

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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
