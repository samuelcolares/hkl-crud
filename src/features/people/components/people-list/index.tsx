import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avatar from "@mui/material/Avatar";
import { useStore } from "@/src/Providers/store-provider";
import { IconButton, ListSubheader, Menu, Typography } from "@mui/material";
import { cn } from "@/src/utils";
import RemoveAllFavorites from "@/src/components/favorite/remove-all";
import ZoomCard from "../person-card/zoom-card";

export default function PeopleList({ className }: { className?: string }) {
  const { people, peopleStatus, favoritePerson } = useStore();

  if (peopleStatus !== "success") return null;

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
            Pessoas
            {people.length > 0 && `(${people.length})`}
          </Typography>
          <RemoveAllFavorites type="people" />
        </ListSubheader>
      }
    >
      {people &&
        people.map((person) => {
          return (
            <ListItem
              key={person.id}
              secondaryAction={<Options person={person} />}
              className="py-1 gap-1 hover:bg-black/30"
            >
              <ListItemAvatar>
                <Avatar
                  alt={person.name + person.id}
                  src={person.avatarUrl}
                  className={cn("w-12 h-12")}
                />
              </ListItemAvatar>
              <ListItemText
                id={person.id}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "1rem",
                    color: "white",
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: ".7rem",
                  },
                }}
                primary={person.name}
                secondary={person.email}
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
import { Person } from "../../types";
import { DeleteDialog } from "@/src/components/delete-dialog";
import PersonDialog from "../person-form";
import FavoriteIconButton from "@/src/components/favorite";

function Options({ person }: { person: Person }) {
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
          <ZoomCard person={person} />
        </MenuItem>
        <MenuItem>
          <PersonDialog variant="edit" defaultValues={person} />
        </MenuItem>
        <MenuItem>
          <DeleteDialog type="people" id={person.id} />
        </MenuItem>
        <MenuItem>
        <FavoriteIconButton type="person" item={person} />
        </MenuItem>
        <MenuItem onClick={handleClose}>Fechar</MenuItem>
      </Menu>
    </div>
  );
}
