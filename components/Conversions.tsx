import { useTheme } from "@emotion/react";
import MemoryIcon from '@mui/icons-material/Memory';
import { Paper, Typography } from "@mui/material";
import { useContext } from "react";
import ConversionsContext from "../contexts/ConversionsContext";
import { FlexColCenterBox } from "./Flex";
import Header from "./Header";

export default function Conversions() {
  const { conversions } = useContext(ConversionsContext);
  const theme = useTheme();
  return <Paper sx={{
    minWidth: 250,
    height: "100%",
    background: theme.palette.color.dark
  }}>
    {conversions.length === 0 && <FlexColCenterBox justify={"space-between"} sx={{
      height: "100%",
      p: 1
    }}>
      <Header>
        No Conversions
      </Header>
      <FlexColCenterBox sx={{
        flexGrow: 1
      }}>
        <MemoryIcon sx={{
          fontSize: 100,
          opacity: 0.5
        }}/>
        <Typography variant="subtitle1">No Conversions</Typography>
      </FlexColCenterBox>
    </FlexColCenterBox>
    }
  </Paper>
}