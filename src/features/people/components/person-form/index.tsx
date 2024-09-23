import { Person } from "../../types";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PersonForm from "./form";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/PersonAddAlt1";
import { cn } from "@/src/utils";

type PersonDialogProps = {
  defaultValues?: Person;
  variant: "add" | "edit";
  className?: string;
};

const PersonDialog: React.FC<PersonDialogProps> = ({
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
          endIcon={<PersonIcon />}
        >
          Adicionar Pessoa
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
        className="p-0 max-lg:bg-black/60 backdrop-blur-sm"
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
        <PersonForm defaultValues={defaultValues} />
      </Dialog>
    </React.Fragment>
  );
};

export default PersonDialog;
