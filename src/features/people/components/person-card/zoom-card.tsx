import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Person } from "../../types";
import PersonCard from ".";

export default function ZoomCard({ person }: { person: Person }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="zoom" color="primary" onClick={handleClickOpen}>
        <VisibilityIcon className="text-white" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            border: 1,
            borderColor: "#fff",
            backdropFilter: "blur(10px)",
            backgroundColor: "transparent",
            margin: 0,
          },

          "& .MuiContainer-root": {
            padding: 0,
          },
        }}
      >
        <PersonCard person={person} />
      </Dialog>
    </React.Fragment>
  );
}
