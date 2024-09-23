import { Song } from "../../types";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import SongForm from "./form";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SongIcon from "@mui/icons-material/MusicNote";
import { cn } from "@/src/utils";

type SongDialogProps = {
  defaultValues?: Song;
  variant: "add" | "edit";
  className?: string;
};

const SongDialog: React.FC<SongDialogProps> = ({
  defaultValues,
  variant,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {variant === "add" && (
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className={cn(
            "border-primary text-white hover:bg-primary hover:border-white flex ml-auto",
            className
          )}
          endIcon={<SongIcon />}
        >
          Adicionar Música
        </Button>
      )}
      {variant === "edit" && (
        <IconButton aria-label="edit" color="primary" onClick={handleClickOpen}>
          <EditIcon className="text-white" />
        </IconButton>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="p-0"
        fullWidth
        maxWidth={"md"}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
            margin: 0,
          },

          "& .MuiContainer-root": {
            padding: 0,
          },
        }}
      >
        <SongForm defaultValues={defaultValues} />
      </Dialog>
    </React.Fragment>
  );
};

export default SongDialog;
