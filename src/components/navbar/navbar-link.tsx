import { Button, Typography } from "@mui/material";
import { Link, useRouter, useLocation } from "@tanstack/react-router";
import React from "react";
import { cn } from "../../utils";

type NavbarLinkProps = {
  to: string;
  label: string;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, to }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      // className="border-b border-b-white text-white p-2 rounded-sm hover:bg-white/30 transition font-bold"
      // activeProps={{
      //   className: activeClassName,
      // }}
    >
      <Button
        variant="text"
        className={cn(
          "text-white rounded-md hover:bg-white/20 capitalize",
          pathname === to && "bg-white/35 border-white"
        )}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavbarLink;
