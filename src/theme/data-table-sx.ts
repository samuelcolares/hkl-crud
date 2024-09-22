import { SxProps, Theme } from "@mui/material";

export const dataTableSX: SxProps<Theme> = {
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