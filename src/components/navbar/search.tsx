import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import systemMessages from "@/src/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up(1024)]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up(1024)]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchInputSchema = z.object({
  search: z.string().min(1, { message: systemMessages.minCharacteres.search }),
});

const SearchInput = () => {
  const { handleSubmit, control, setValue } = useForm<
    z.infer<typeof SearchInputSchema>
  >({
    resolver: zodResolver(SearchInputSchema),
  });
  const router = useRouter();
  const queryClient = useQueryClient();

  const onSubmit = async (values: z.infer<typeof SearchInputSchema>) => {
    await queryClient.invalidateQueries({
      queryKey: ["search"],
    });
    await router.navigate({
      to: "/pesquisa",
      search: {
        q: values.search,
      },
    });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={"search"}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar..."
              inputProps={{ "aria-label": "search" }}
              onChange={onChange}
              value={value}
              error={!!error}
            />
          </Search>
        )}
      />
    </Box>
  );
};

export default SearchInput;
