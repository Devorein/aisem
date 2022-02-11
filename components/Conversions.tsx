import { useTheme } from "@emotion/react";
import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import ConversionsContext from "../contexts/ConversionsContext";

export default function Conversions() {
  const {conversions} = useContext(ConversionsContext);
  const theme = useTheme();
  return <Paper sx={{
    width: 250,
    height: "100%",
    background: theme.palette.color.dark
  }}>
    {conversions.map(conversion => {
      <Box>
        {conversion.operation}
      </Box>
    })}
  </Paper>
}