import { createContext, useContext } from "react";
import { StoreContext as StoreType } from "./store.type";
import { useFavoritePeople } from "../features/people/hooks/use-favorite-people.hook";

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

  return (
    <StoreContext.Provider
      value={{
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
