import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";

export const FlexAlignCenter = styled(Paper)`
  display: flex;
  align-items: center;
`;

export const FlexAlignCenterBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const FlexCenter = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColCenter = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FlexColCenterBox = styled(Box)<{justify?: CSSProperties["justifyContent"]}>`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ?? "center"};
  flex-direction: column;
`;