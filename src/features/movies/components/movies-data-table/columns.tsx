import { GridColDef } from "@mui/x-data-grid";
import { Movie } from "../../types";
import { Stack } from "@mui/material";

import FavoriteIconButton from "@/src/components/favorite";
import { DeleteDialog } from "@/src/components/delete-dialog";
import MovieDialog from "../movie-form";

export const columns: GridColDef<Movie>[] = [
  {
    field: "",
    headerName: "",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <FavoriteIconButton type="movies" item={params.row} />
    ),
    filterable: false,
    sortable: false,
    hideable: false,
    disableColumnMenu: true,
  },
  {
    field: "title",
    headerName: "Título",
    editable: false,
    flex: 1,
    filterable: false,
  },
  {
    field: "genre",
    headerName: "Gênero",
    editable: false,
    flex: 1,
    filterable: false,
  },
  {
    field: "id",
    headerName: "Ações",
    flex: 1,
    editable: false,
    filterable: false,
    renderCell: (params) => (
      <Stack direction={"row"}>
        <MovieDialog variant="edit" defaultValues={params.row} />
        <DeleteDialog type="movies" id={params.value} />
      </Stack>
    ),
  },
];
