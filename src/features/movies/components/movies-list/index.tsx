import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avatar from "@mui/material/Avatar";
import { useStore } from "@/src/Providers/store-provider";
import { IconButton, ListSubheader, Menu, Typography } from "@mui/material";
import { cn } from "@/src/utils";
import RemoveAllFavorites from "@/src/components/favorite/remove-all";

export default function MoviesList({ className }: { className?: string }) {
  const { movies, moviesStatus, favoriteMovie } = useStore();

  if (moviesStatus !== "success") return null;

  return (
    <List
      sx={{
        maxHeight: 500,
        overflow: "auto",
        bgcolor: "rgba(0,0,0,0.1)",
        border: 1,
        backdropFilter: "blur(5px)",
      }}
      className={cn("border-white rounded-md max-xl:max-w-full", className)}
      subheader={
        <ListSubheader className="bg-primary text-white font-bold flex items-center justify-between p-4">
          <Typography>
            Filmes {movies.length > 0 && `(${movies.length})`}
          </Typography>
          <RemoveAllFavorites type="movies" />
        </ListSubheader>
      }
    >
      {movies &&
        movies.map((movie) => {
          return (
            <ListItem
              key={movie.id}
              secondaryAction={<Options movie={movie} />}
              className="py-1 gap-1 hover:bg-black/30"
            >
              <ListItemText
                id={movie.id}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "1rem",
                    color: "white",
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: ".7rem",
                  },
                }}
                primary={movie.title}
                secondary={movie.genre}
                className="text-white"
              />
            </ListItem>
          );
        })}
    </List>
  );
}

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Movie } from "../../types";
import { DeleteDialog } from "@/src/components/delete-dialog";
import MovieDialog from "../movie-form";
import FavoriteIconButton from "@/src/components/favorite";

function Options({ movie }: { movie: Movie }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon className="text-white" />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <MovieDialog variant="edit" defaultValues={movie} />
        </MenuItem>
        <MenuItem>
          <DeleteDialog type="movies" id={movie.id} />
        </MenuItem>
        <MenuItem>
          <FavoriteIconButton type="movies" item={movie} />
        </MenuItem>
        <MenuItem onClick={handleClose}>Fechar</MenuItem>
      </Menu>
    </div>
  );
}
