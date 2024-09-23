import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useStore } from "@/src/Providers/store-provider";
import FavoriteIconButton from "@/src/components/favorite";
import { ListSubheader, Typography } from "@mui/material";
import { useLocation, useRouter } from "@tanstack/react-router";
import { cn } from "@/src/utils";
import RemoveAllFavorites from "@/src/components/favorite/remove-all";
import systemMessages from "@/src/utils/constants";

export default function FavoriteMoviesList({
  variant,
  className,
}: {
  variant: "md" | "lg";
  className?: string;
}) {
  const { favoriteMovies } = useStore();
  const router = useRouter();

  const routerTo = () => {
    router.navigate({
      to: "/filmes",
    });
  };
  const { pathname } = useLocation();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: variant === "md" ? 300 : 450,
        maxHeight: variant === "md" ? 360 : 550,
        overflow: "auto",
        bgcolor: "rgba(0,0,0,0.1)",
        border: 1,
        backdropFilter: "blur(5px)",
      }}
      className={cn("border-white rounded-md max-xl:max-w-full", className)}
      subheader={
        <ListSubheader className="bg-primary text-white font-bold flex items-center justify-between p-4">
          <Typography>
            Filmes Favoritos{" "}
            {favoriteMovies.length > 0 && `(${favoriteMovies.length})`}
          </Typography>
          <RemoveAllFavorites type="movies" />
        </ListSubheader>
      }
    >
      {favoriteMovies.map((movie) => {
        return (
          <ListItem
            key={movie.id}
            secondaryAction={<FavoriteIconButton type="movies" item={movie} />}
            className="py-1 gap-4 hover:bg-black/30"
          >
            <ListItemText
              id={movie.id}
              sx={{
                "& .MuiTypography-root": {
                  fontSize: variant === "md" ? "1rem" : "1.5rem",
                  color: "white",
                },
                "& .MuiListItemText-secondary": {
                  fontSize: variant === "md" ? ".7rem" : "1rem",
                },
              }}
              primary={movie.title}
              secondary={movie.genre}
              className="text-white"
            />
          </ListItem>
        );
      })}

      {favoriteMovies.length === 0 && (
        <>
          <ListItem className="py-1">
            <ListItemText
              primary={`${systemMessages.other.noFavorites} 🥺`}
              className="text-white text-center"
            />
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              className={cn(
                "bg-primary hover:bg-primary/85 rounded-md",
                pathname === "/filmes" && "hidden"
              )}
              onClick={routerTo}
            >
              <ListItemText
                primary={"Favorite um filme"}
                className="text-white text-center"
              />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  );
}
