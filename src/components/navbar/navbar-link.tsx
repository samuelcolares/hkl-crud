import { Button, SvgIconTypeMap, Typography } from "@mui/material";
import { Link, useRouter, useLocation } from "@tanstack/react-router";
import React from "react";
import { cn } from "../../utils";

import { OverridableComponent } from "@mui/material/OverridableComponent";

type NavbarLinkProps = {
  to: string;
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, to, Icon }) => {
  const { pathname } = useLocation();
  return (
    <Link to={to} className="w-full lg:w-fit">
      <Button
        variant="text"
        startIcon={<Icon />}
        className={cn(
          "text-white rounded-md hover:bg-white/20 capitalize w-full lg:w-fit lg:justify-center justify-start",
          pathname === to && "bg-primary border-white"
        )}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavbarLink;
