import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import usePeople from "../../hooks/use-people.hook";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useLoading } from "@/src/hooks/convinient-states.hooks";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";

export default function DeletePersonDialog({ personId }: { personId: string }) {
  const { deletePerson } = usePeople();
  const { loading, startLoading, stopLoading } = useLoading();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    try {
      startLoading();
      await deletePerson(personId);
    } finally {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
        <DeleteIcon className="text-red-600" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="p-0"
        fullWidth
        maxWidth={"sm"}
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
        <DialogTitle
          id="alert-dialog-title"
          className="text-red-700 text-2xl font-bold animate-pulse"
        >
          {"Atenção!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="text-white"
          >
            Deseja deletar essa pessoa do banco de dados? essa ação é
            irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            disabled={loading}
            className="disabled:opacity-70 disabled:bg-white/10 text-primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleClose}
            disabled={loading}
            color="error"
            variant="outlined"
            endIcon={loading ? <LoaderCircle /> : <DeleteForeverIcon />}
            className="disabled:opacity-70 disabled:bg-red-700/30 border-red-800 disabled:text-white"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
