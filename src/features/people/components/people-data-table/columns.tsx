import { GridColDef } from "@mui/x-data-grid";
import { Person } from "../../types";
import { Avatar, Stack } from "@mui/material";
import PersonDialog from "../person-form";
import FavoriteIconButton from "@/src/components/favorite";
import { DeleteDialog } from "@/src/components/delete-dialog";

export const columns: GridColDef<Person>[] = [
  {
    field: "",
    headerName: "",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <FavoriteIconButton type="person" item={params.row} />
    ),
    filterable: false,
    sortable: false,
    hideable: false,
    disableColumnMenu: true,
  },
  {
    field: "avatarUrl",
    headerName: "Avatar",
    width: 150,
    editable: false,
    renderCell: (params) => <Avatar alt="Avatar" src={params.value} />,
    filterable: false,
  },
  {
    field: "name",
    headerName: "Nome",
    editable: false,
    flex: 1,
    filterable: false,
  },
  {
    field: "cpf",
    headerName: "CPF",
    editable: false,
    flex: 1,
    filterable: false,
  },
  {
    field: "phone",
    headerName: "Telefone",
    flex: 1,
    editable: false,
    filterable: false,
  },
  {
    field: "email",
    headerName: "E-mail",
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
        <PersonDialog variant="edit" defaultValues={params.row} />
        <DeleteDialog type="people" id={params.value} />
      </Stack>
    ),
  },
];
