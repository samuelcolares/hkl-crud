import { GridColDef } from "@mui/x-data-grid";
import { Song } from "../../types";
import { Avatar, Stack } from "@mui/material";
// import PersonDialog from "../people-form";
// import DeletePersonDialog from "../delete-person-dialog";

import FavoriteIconButton from "@/src/components/favorite";
import { DeleteDialog } from "@/src/components/delete-dialog";
import SongDialog from "../song-form";

export const columns: GridColDef<Song>[] = [
  {
    field: "",
    headerName: "",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <FavoriteIconButton type="songs" item={params.row} />
    ),
    filterable: false,
    sortable: false,
    hideable: false,
    disableColumnMenu: true,
  },
  {
    field: "name",
    headerName: "Nome",
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
    field: "singerOrBand",
    headerName: "Cantor(a)/Banda",
    flex: 1,
    editable: false,
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
        <SongDialog variant="edit" defaultValues={params.row} />
        <DeleteDialog type="songs" id={params.value} />
      </Stack>
    ),
  },
];
