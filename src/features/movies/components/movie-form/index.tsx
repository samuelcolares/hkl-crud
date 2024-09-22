import { Movie } from "../../types";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MovieForm from "./form";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MovieIcon from "@mui/icons-material/Movie";

type MovieDialogProps = {
  defaultValues?: Movie;
  variant: "add" | "edit";
  className?: string;
};

const MovieDialog: React.FC<MovieDialogProps> = ({
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
          className="border-primary text-white hover:bg-primary hover:border-white flex ml-auto"
          endIcon={<MovieIcon />}
        >
          Adicionar Filme
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
        <MovieForm defaultValues={defaultValues} />
      </Dialog>
    </React.Fragment>
  );
};

export default MovieDialog;
