import { useTheme } from "@emotion/react";
import DeleteIcon from "@mui/icons-material/Delete";
import MemoryIcon from '@mui/icons-material/Memory';
import { Box, IconButton, Paper, Radio, Tooltip, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { ReactNode, useContext } from "react";
import { hoverTransitionSvgIconSx } from "../constants";
import ConversionsContext from "../contexts/ConversionsContext";
import { useScrollbarStyling } from "../hooks/useScrollbarStyling";
import { FlexAlignCenterBox, FlexColCenterBox } from "./Flex";
import Header from "./Header";

export default function Conversions() {
  const { conversions, setConversions, currentConversion, setCurrentConversion } = useContext(ConversionsContext);
  const theme = useTheme();
  const scrollbarStyling = useScrollbarStyling();

  let content: ReactNode = null;

  if (conversions.length === 0) {
    content = <FlexColCenterBox sx={{
      flexGrow: 1
    }}>
      <MemoryIcon sx={{
        fontSize: 100,
        opacity: 0.5
      }} />
      <Typography variant="subtitle1">No Conversions</Typography>
    </FlexColCenterBox>
  } else {
    content = <FlexColCenterBox justify={"start"} sx={{
      ...scrollbarStyling,
      flexGrow: 1,
      width: "100%",
      gap: 1,
      background: theme.palette.color.base,
      borderRadius: theme.spacing(0.5),
      p: 1,
      overflow: "auto"
    }}>
      {conversions.map((conversion, conversionNumber) => <FlexAlignCenterBox sx={{
        background: theme.palette.color.dark,
        width: "100%",
        px: 2,
        py: 1,
        borderRadius: theme.spacing(0.5),
      }} key={`${conversion.hex}.${conversion.operation}.${conversionNumber}`}>
        <Radio value={conversionNumber} checked={currentConversion === conversion} onClick={() => {
          if (currentConversion === conversion) {
            setCurrentConversion(null);
          } else {
            setCurrentConversion(conversion);
          }
        }}/>
        <FlexAlignCenterBox sx={{
          gap: 1,
          justifyContent: "space-between"
        }}>
          <FlexAlignCenterBox sx={{
            gap: 1,
          }}>
            <Box>
              {conversionNumber + 1}.
            </Box>
            <Box sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}>
              {conversion.operation}
            </Box>
            {conversion.operands.map((operand, operandNumber) => <Box key={operand+operandNumber}>{operand}</Box>)}
          </FlexAlignCenterBox>
          <Tooltip sx={hoverTransitionSvgIconSx} onClick={() => {
              if (currentConversion === currentConversion) {
                setCurrentConversion(null);
              }
              conversions.splice(conversionNumber, 1);
              setConversions([...conversions])
            }} title="Delete" placement="right">
            <IconButton>
              <DeleteIcon sx={{
                fontSize: 16,
                fill: red[500]
              }}/>
            </IconButton>
          </Tooltip>
        </FlexAlignCenterBox>
      </FlexAlignCenterBox>)}
    </FlexColCenterBox>
  }

  return <Paper sx={{
    minWidth: 250,
    height: "100%",
    background: theme.palette.color.dark
  }}>
    <FlexColCenterBox justify={"space-between"} sx={{
      height: "100%",
      p: 1,
      gap: 1
    }}>
      <Header>
        Conversions
      </Header>
      {content}
    </FlexColCenterBox>
  </Paper>
}

// add $t1 $t2 $t3