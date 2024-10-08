import { useLocation, useRouter } from "@tanstack/react-router";
import { useStore } from "@/src/Providers/store-provider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIconButton from "@/src/components/favorite";
import { ListSubheader, Typography } from "@mui/material";
import RemoveAllFavorites from "@/src/components/favorite/remove-all";

import { cn } from "@/src/utils";
import systemMessages from "@/src/utils/constants";

export default function FavoriteSongsList({
  variant,
  className,
}: {
  variant: "md" | "lg";
  className?: string;
}) {
  const { favoriteSongs } = useStore();
  const router = useRouter();

  const routerTo = () => {
    router.navigate({
      to: "/musicas",
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
      className={cn("border-white rounded-md max-xl:max-w-full xl:!mt-0", className)}
      subheader={
        <ListSubheader className="bg-primary text-white font-bold flex items-center justify-between p-4">
          <Typography>
            Músicas Favoritas{" "}
            {favoriteSongs.length > 0 && `(${favoriteSongs.length})`}
          </Typography>
          <RemoveAllFavorites type="songs" />
        </ListSubheader>
      }
    >
      {favoriteSongs.map((song) => {
        return (
          <ListItem
            key={song.id}
            secondaryAction={<FavoriteIconButton type="songs" item={song} />}
            className="py-1 gap-4 hover:bg-black/30"
          >
            <ListItemText
              id={song.id}
              sx={{
                "& .MuiTypography-root": {
                  fontSize: variant === "md" ? "1rem" : "1.5rem",
                  color: "white",
                },
                "& .MuiListItemText-secondary": {
                  fontSize: variant === "md" ? ".7rem" : "1rem",
                },
              }}
              primary={song.name}
              secondary={song.singerOrBand}
              className="text-white"
            />
          </ListItem>
        );
      })}

      {favoriteSongs.length === 0 && (
        <>
          <ListItem className="py-1">
            <ListItemText
              primary={`${systemMessages.other.noFavorites} 😭`}
              className="text-white text-center"
            />
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              className={cn(
                "bg-primary hover:bg-primary/85 rounded-md",
                pathname === "/musicas" && "hidden"
              )}
              onClick={routerTo}
            >
              <ListItemText
                primary={"Favorite uma música"}
                className="text-white text-center"
              />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  );
}
