import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MemoryIcon from '@mui/icons-material/Memory';
import { Box, Button, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import Conversions from '../components/Conversions';
import { FlexAlignCenter, FlexColCenter } from '../components/Flex';
import Snackbar from '../components/Snackbar';
import ConversionsContext from '../contexts/ConversionsContext';
import useSnackbar from '../hooks/useSnackbar';
import convertToMachineCode from '../libs/convertAssemblyToMachineCode';

const BinaryCode = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(0.5),
  background: theme.palette.color.dark,
  display: "flex",
  alignItems: "center"
}));

const Home: NextPage = () => {
  const [assemblyInstruction, setAssemblyInstruction] = useState<string>("");
  const [machineCode, setMachineCode] = useState<string[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { handleClose, isOpen, message, showMessage } = useSnackbar();
  const theme = useTheme();
  const {setConversions} = useContext(ConversionsContext);

  const hexadecimal = machineCode ? parseInt(machineCode.join(""), 2).toString(16).toUpperCase() : 0xff;

  return (
    <FlexAlignCenter sx={{
      gap: 1,
      height: "100%",
    }}>
      <Conversions />
      <FlexColCenter sx={{
        gap: 2,
        height: "100%",
        width: "100%",
        boxShadow: "none"
      }}>
        <TextField onChange={e => setAssemblyInstruction(e.target.value)} value={assemblyInstruction} />
        <FlexAlignCenter sx={{
          gap: 1
        }}>
          <Button sx={{
            display: "flex",
            gap: 1
          }} variant="contained" disabled={!assemblyInstruction} onClick={() => {
            if (assemblyInstruction) {
              try {
                const machineCodeChunks = convertToMachineCode(assemblyInstruction);
                const binary = machineCodeChunks.join("");
                const hex = parseInt(binary, 2).toString(16).toUpperCase();
                const tokens = assemblyInstruction.split(" ");
                setMachineCode(machineCodeChunks);
                setErrorMessage(null);
                setConversions((conversions) => ([...conversions, {
                  binary,
                  hex,
                  operands: tokens.slice(1),
                  operation: tokens[0]
                }]))
              } catch (err: any) {
                setErrorMessage(err.message)
              }
            }
          }}>
            <MemoryIcon />
            <Typography variant="button">
              Convert
            </Typography>
          </Button>
        </FlexAlignCenter>
        <FlexColCenter sx={{
          gap: 2,
          p: 2,
          background: theme.palette.color.light,
          boxShadow: theme.shadows[3]
        }}>
          <Typography variant="h5">Machine code</Typography>
          <FlexAlignCenter sx={{
            gap: 1, p: 1
          }}>
            <Box sx={{mr: 1}}>Binary:</Box> {machineCode?.map((chunk, index) => <BinaryCode key={chunk + index}>{chunk}</BinaryCode>) ?? "N/A"} {machineCode && <Tooltip onClick={() => {
              showMessage("Copied binary to clipboard");
              navigator.clipboard.writeText(machineCode.join(""))
            }} title={"Copy binary to clipboard"} placement={"right"}>
              <IconButton>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>}
          </FlexAlignCenter>
          <FlexAlignCenter sx={{
            gap: 1, p: 1
          }}>
            <Box sx={{mr: 1}}>Hex:</Box> {machineCode ? <BinaryCode>0x{hexadecimal}</BinaryCode> : "N/A"} {machineCode && <Tooltip onClick={() => {
              showMessage("Copied hex to clipboard");
              navigator.clipboard.writeText(hexadecimal.toString())
            }} title={"Copy hex to clipboard"} placement={"right"}>
              <IconButton>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>}
          </FlexAlignCenter>
        </FlexColCenter>
        <Box sx={{
          color: red[500],
          fontWeight: 500
        }}>
          {errorMessage ? `Error: ${errorMessage}` : null}
        </Box>
        <Snackbar autoHideDuration={1500} severity='success' handleClose={handleClose} isOpen={isOpen} message={message ?? ''} />
      </FlexColCenter>
    </FlexAlignCenter>
  )
}

export default Home
