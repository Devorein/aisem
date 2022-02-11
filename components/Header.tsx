import styled from "@emotion/styled";
import { Box, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const StyledHeader = styled(Box)(({theme}) => ({
  background: theme.palette.color.light,
  padding: theme.spacing(1),
  textAlign: "center",
  textTransform: "uppercase",
  borderRadius: theme.spacing(0.5),
  width: "100%",
  userSelect: "none"
}));

interface HeaderProps {
  children: ReactNode
  variant?: TypographyProps["variant"]
}

export default function Header(props: HeaderProps) {
  const {children, variant = "h5"} = props;
  return <StyledHeader>
    <Typography variant={variant}>
      {children}
    </Typography>
  </StyledHeader>
}