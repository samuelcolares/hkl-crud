import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avatar from "@mui/material/Avatar";
import { useStore } from "@/src/Providers/store-provider";
import FavoriteIconButton from "@/src/components/favorite";
import { ListSubheader, Typography } from "@mui/material";
import { useLocation, useRouter } from "@tanstack/react-router";
import { cn } from "@/src/utils";
import RemoveAllFavorites from "@/src/components/favorite/remove-all";
import systemMessages from "@/src/utils/constants";

export default function FavoritePeopleList({
  variant,
  className,
}: {
  variant: "md" | "lg";
  className?: string;
}) {
  const { favoritePeople } = useStore();

  const router = useRouter();

  const routerTo = () => {
    router.navigate({
      to: "/pessoas",
    });
  };
  const { pathname } = useLocation();

  return (
    <List
      sx={{
        width: "100%",
        minWidth: 300,
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
            Pessoas Favoritas{" "}
            {favoritePeople &&
              favoritePeople.length > 0 &&
              `(${favoritePeople.length})`}
          </Typography>
          <RemoveAllFavorites type="people" />
        </ListSubheader>
      }
    >
      {favoritePeople &&
        favoritePeople.map((person) => {
          return (
            <ListItem
              key={person.id}
              secondaryAction={
                <FavoriteIconButton type="person" item={person} />
              }
              className="py-1 gap-4 hover:bg-black/30"
            >

              <ListItemAvatar>
                <Avatar
                  alt={person.name + person.id}
                  src={person.avatarUrl}
                  className={cn("w-20 h-20", variant === "md" && "w-12 h-12")}
                />
              </ListItemAvatar>
              <ListItemText
                id={person.id}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: variant === "md" ? "1rem" : "1.5rem",
                  },
                }}
                primary={person.name}
                className="text-white"
              />
            </ListItem>
          );
        })}

      {favoritePeople && favoritePeople.length === 0 && (
        <>
          <ListItem className="py-1">
            <ListItemText
              primary={`${systemMessages.other.noFavorites} 😥`}
              className="text-white text-center"
            />
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              className={cn(
                "bg-primary hover:bg-primary/85 rounded-md",
                pathname === "/pessoas" && "hidden"
              )}
              onClick={routerTo}
            >
              <ListItemText
                primary={"Favorite alguém"}
                className="text-white text-center"
              />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  );
}
