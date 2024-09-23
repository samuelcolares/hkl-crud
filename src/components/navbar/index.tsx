import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import NavbarLink from "./navbar-link";
import { Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import MobileMenu from "./mobile-menu";
import SearchInput from "./search";

export default function SearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="bg-transparent backdrop-blur-sm z-50 border-b-white/20"
        sx={{
          borderBottomWidth: "1px",
          borderStyle: "solid",
        }}
        position="relative"
      >
        <Toolbar>
          <MobileMenu />
          <Stack
            spacing={0.5}
            direction={"row"}
            className="flex-1 hidden lg:flex"
          >
            <NavbarLink Icon={HomeIcon} label="Início" to="/" />
            <NavbarLink Icon={PeopleIcon} label="Pessoas" to="/pessoas" />
            <NavbarLink Icon={MovieIcon} label="Filmes" to="/filmes" />
            <NavbarLink Icon={MusicNoteIcon} label="Músicas" to="/musicas" />
          </Stack>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
