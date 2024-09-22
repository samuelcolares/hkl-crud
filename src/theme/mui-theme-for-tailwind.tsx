import { createTheme } from "@mui/material";
const rootElement = document.getElementById("root");

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // Standard
          "& .MuiInput-root": {
            color: "#FFF",
            "&:before": {
              borderColor: "#494E55",
              borderWidth: "2px",
            },
            "&:after": {
              borderColor: "#c3c7cc",
              borderWidth: "3px",
            },
            ":hover:not(.Mui-focused)": {
              "&:before": {
                borderColor: "#737b86",
                borderWidth: "2px",
              },
            },
          },
          // Label
          "& .MuiInputLabel-standard": {
            color: "#FFF",
            "&.Mui-focused": {
              color: "#FFF",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // Outlined
          "& .MuiOutlinedInput-root": {
            color: "#FFF",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2e2e2e",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
                borderWidth: "3px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#2e2e2e",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "secondary.main",
            },
          },
          // Filled
          "& .MuiFilledInput-root": {
            color: "#FFF",
            backgroundColor: "#e7e7e7",
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
            "&:before": {
              borderColor: "#2e2e2e",
              borderWidth: "2px",
            },
            "&:after": {
              borderColor: "secondary.main",
              borderWidth: "3px",
            },
            ":hover:not(.Mui-focused)": {
              "&:before": {
                borderColor: "#e7e7e7",
                borderWidth: "2px",
              },
              backgroundColor: "#f4f4f4",
            },
          },
          "& .MuiInputLabel-filled": {
            color: "#2e2e2e",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "secondary.main",
            },
          },
          // Standard
          "& .MuiInput-root": {
            color: "#FFF",
            "&:before": {
              borderColor: "#494E55",
              borderWidth: "2px",
            },
            "&:after": {
              borderColor: "#c3c7cc",
              borderWidth: "3px",
            },
            ":hover:not(.Mui-focused)": {
              "&:before": {
                borderColor: "#737b86",
                borderWidth: "2px",
              },
            },
          },
          // Label
          "& .MuiInputLabel-standard": {
            color: "#FFF",
            "&.Mui-focused": {
              color: "#FFF",
              fontWeight: "bold",
            },
          },
        },
      },
    },
  },
});

export default theme;
