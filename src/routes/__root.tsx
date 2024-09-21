import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Box component={"div"} className="min-h-screen relative z-10">
      <Navbar />
      <Outlet />
      <Box className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <BackgroundBeams />
      <Toaster />
    </Box>
  );
}
