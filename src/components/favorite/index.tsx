import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Grade";
import { useStore } from "@/src/Providers/store-provider";
import { cn } from "@/src/utils";
import { Person } from "@/src/features/people/types";
import { Song } from "@/src/features/songs/types";

type Favorite =
  | { type: "person"; item: Person }
  | { type: "movies"; item: {} }
  | { type: "songs"; item: Song };

const FavoriteIconButton = (payload: Favorite) => {
  const { item, type } = payload;
  const { favoritePerson, isPersonFavorited, isSongFavorited, favoriteSong } =
    useStore();
  const handleClick = () => {
    if (type === "person") {
      return favoritePerson(item);
    }
    if (type === "songs") {
      return favoriteSong(item);
    }
  };

  const checkFavorite = () => {
    if (type === "person") {
      return isPersonFavorited(item);
    }

    if (type === "songs") {
      return isSongFavorited(item);
    }

    return false;
  };
  return (
    <IconButton aria-label="delete" color="primary" onClick={handleClick}>
      <StarIcon
        className={cn(
          "text-white hover:text-yellow-200 transition-colors hover:animate-pulse active:scale-110",
          checkFavorite() && "text-yellow-400"
        )}
      />
    </IconButton>
  );
};

export default FavoriteIconButton;
