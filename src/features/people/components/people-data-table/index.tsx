import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridLocaleText } from "@mui/x-data-grid";
import { Avatar, IconButton, Stack, SxProps, Theme } from "@mui/material";
import { Person } from "@/src/features/people/types";
import usePeople from "../../hooks/use-people.hook";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Grade";
import PeopleDialog from "../people-form";
import DeletePersonDialog from "../delete-person-dialog";

const columns: GridColDef<Person>[] = [
  {
    field: "",
    headerName: "",
    width: 80,
    editable: false,
    renderCell: (params) => (
      <IconButton aria-label="delete" color="primary">
        <StarIcon className="text-white-600" />
      </IconButton>
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
        <PeopleDialog variant="edit" defaultValues={params.row} />
        <DeletePersonDialog personId={params.value} />
      </Stack>
    ),
  },
];

export default function PeopleDataGrid() {
  const { people, status } = usePeople();
  console.log(people, status);
  return (
    <Box>
      <DataGrid
        localeText={localizedTextsMap}
        rows={people}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        sx={SX}
        pageSizeOptions={[5]}
        className="w-full"
        // checkboxSelection
        rowSelection={false}
      />
    </Box>
  );
}

const SX: SxProps<Theme> = {
  "& .MuiDataGrid-columnHeader": {
    background: "#494e55", // Cor de fundo do cabeçalho
    color: "#FFF", // Cor do texto do cabeçalho
    fontSize: "16px", // Tamanho do texto do cabeçalho
  },
  "& .MuiDataGrid-cell": {
    background: "transparent",
    color: "#FFF", // Cor do texto das células
    fontSize: "14px", // Tamanho do texto das células
    "&:focus": {
      outline: 0,
    },
    "&:focus-within": {
      outline: 0,
    },
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "rgba(0,0,0,0.0)",
    backdropFilter: "blur(4px)",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.4)", // Cor de fundo ao passar o mouse
    },
  },
  "& .MuiDataGrid-filler": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "rgba(255,0,0)",
    backdropFilter: "blur(4px)",
  },

  "& .MuiDataGrid-root": {
    ["--DataGrid-containerBackground"]: "transparent", // Remove white background
  },
  ".MuiDataGrid-columnSeparator": {
    display: "none",
  },
  ".MuiOutlinedInput-root": {
    color: "#000",
    "::placeholder": {
      color: "#000",
    },
  },
  "& .MuiInput-root": {
    color: "#000",
    "::placeholder": {
      color: "#000",
    },
  },
  "& .MuiTablePagination-displayedRows": {
    color: "#FFF",
  },
  "& .MuiButtonBase-root": {
    color: "#FFF",
  },
};

const localizedTextsMap: Partial<GridLocaleText> = {
  columnMenuUnsort: "Não classificado",
  columnMenuSortAsc: "Classificar por ordem crescente",
  columnMenuSortDesc: "Classificar por ordem decrescente",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocultar",
  columnMenuShowColumns: "Mostrar colunas",
  columnMenuManageColumns: "Gerenciar Colunas",
  columnsManagementShowHideAllText: "Mostrar/Ocultar Tudo",
  columnsManagementReset: "Resetar",
  columnsManagementSearchTitle: "Pesquisar",
  columnsManagementNoColumns: "Sem resultados",
  filterPanelColumns: "Colunas",
  filterPanelOperator: "Operador",
  noRowsLabel: "Sem resultado.",
  noResultsOverlayLabel: "Sem resultados.",
};
