import * as React from "react";
import { useStore } from "@/src/Providers/store-provider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListSubheader, Menu, Typography } from "@mui/material";
import RemoveAllFavorites from "@/src/components/favorite/remove-all";
import { DeleteDialog } from "@/src/components/delete-dialog";
import SongDialog from "../song-form";
import FavoriteIconButton from "@/src/components/favorite";

import { cn } from "@/src/utils";
import { Song } from "../../types";


export default function SongsList({ className }: { className?: string }) {
  const { songs, songsStatus } = useStore();

  if (songsStatus !== "success") return null;

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
            Músicas {songs.length > 0 && `(${songs.length})`}
          </Typography>
        </ListSubheader>
      }
    >
      {songs &&
        songs.map((song) => {
          return (
            <ListItem
              key={song.id}
              secondaryAction={<Options song={song} />}
              className="py-1 gap-1 hover:bg-black/30"
            >
              <ListItemText
                id={song.id}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "1rem",
                    color: "white",
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: ".7rem",
                  },
                }}
                primary={song.name}
                secondary={song.genre}
                className="text-white"
              />
            </ListItem>
          );
        })}
    </List>
  );
}

function Options({ song }: { song: Song }) {
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
          <SongDialog variant="edit" defaultValues={song} />
        </MenuItem>
        <MenuItem>
          <DeleteDialog type="songs" id={song.id} />
        </MenuItem>
        <MenuItem>
          <FavoriteIconButton type="songs" item={song} />
        </MenuItem>
        <MenuItem onClick={handleClose}>Fechar</MenuItem>
      </Menu>
    </div>
  );
}
