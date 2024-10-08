import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useLoading } from "@/src/hooks/convinient-states.hooks";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";
import { useStore } from "@/src/Providers/store-provider";
import { cn } from "@/src/utils";

export default function RemoveAllFavorites({
  type,
}: {
  type: "people" | "songs" | "movies";
}) {
  const {
    resetFavoritePeople,
    resetFavoriteSongs,
    resetFavoriteMovies,
    favoriteMovies,
    favoritePeople,
    favoriteSongs,
  } = useStore();
  const { loading, startLoading, stopLoading } = useLoading();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const deleteAndClose = async () => {
    try {
      startLoading();
      if (type === "people") return resetFavoritePeople();
      if (type === "songs") return resetFavoriteSongs();
      if (type === "movies") return resetFavoriteMovies();
    } finally {
      setOpen(false);
      stopLoading();
    }
  };

  return (
    <React.Fragment>
      <Typography
        className={cn(
          "text-xs hover:underline hover:cursor-pointer",
          type === "people" && favoritePeople && favoritePeople.length === 0 && "hidden",
          type === "songs" && favoriteSongs && favoriteSongs.length === 0 && "hidden",
          type === "movies" && favoriteMovies && favoriteMovies.length === 0 && "hidden"
        )}
        onClick={handleClickOpen}
      >
        Limpar
      </Typography>
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
            Deseja remover todos os favoritos? essa ação é irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            disabled={loading}
            className="disabled:opacity-70 disabled:bg-white/10 disabled:text-primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={deleteAndClose}
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
