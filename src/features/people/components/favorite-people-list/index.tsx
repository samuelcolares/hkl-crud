import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avatar from "@mui/material/Avatar";
import { useStore } from "@/src/Providers/store-provider";
import FavoriteIconButton from "@/src/components/favorite";
import { ListSubheader } from "@mui/material";
import { useLocation, useRouter } from "@tanstack/react-router";
import { cn } from "@/src/utils";

export default function FavoritePeopleList({
  variant,
}: {
  variant: "md" | "lg";
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
        maxWidth: variant === "md" ? 300 : 450,
        maxHeight: variant === "md" ? 300 : 550,
        overflow: "auto",
        bgcolor: "rgba(0,0,0,0.1)",
        border: 1,
        backdropFilter: "blur(5px)",
      }}
      className="border-white rounded-md"
      subheader={
        <ListSubheader className="bg-primary text-white font-bold ">
          Pessoas Favoritas
        </ListSubheader>
      }
    >
      {favoritePeople.map((person) => {
        return (
          <ListItem
            key={person.id}
            secondaryAction={<FavoriteIconButton type="person" item={person} />}
            className="py-1 gap-4 hover:bg-black/30"
          >
            {/* <ListItemButton>
              </ListItemButton> */}
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
                  fontSize: variant === "md" ? '1rem' : '1.5rem',
                },
              }}
              primary={person.name}
              className="text-white"
            />
          </ListItem>
        );
      })}

      {favoritePeople.length === 0 && (
        <>
          <ListItem className="py-1">
            <ListItemText
              primary={"Nenhuma pessoa foi favoritada 😥"}
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
