import { Container } from "@mui/material";
import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Container maxWidth={"md"} className={className}>
      {children}
    </Container>
  );
};

export default Wrapper;
