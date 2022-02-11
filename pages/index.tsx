import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import MemoryIcon from '@mui/icons-material/Memory';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import type { NextPage } from 'next';
import { useState } from 'react';
import convertToMachineCode from '../libs/convertAssemblyToMachineCode';

const Flex = styled.div`
  display: flex;
`
const Home: NextPage = () => {
  const [assemblyInstruction, setAssemblyInstruction] = useState<string>("");
  const [machineCode, setMachineCode] = useState<string[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const theme = useTheme();

  return (
    <Paper sx={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 2
    }}>
      <TextField onChange={e => setAssemblyInstruction(e.target.value)} value={assemblyInstruction} />
      <Flex>
        <Button sx={{
          display: "flex",
          gap: 1
        }} variant="contained" disabled={!assemblyInstruction} onClick={() => {
          if (assemblyInstruction) {
            try {
              const machineCodeChunks = convertToMachineCode(assemblyInstruction);
              setMachineCode(machineCodeChunks)
              setErrorMessage(null)
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
      </Flex>
      <Box>
        <Typography component="span" sx={{
          fontWeight: 500,
          display: "flex",
          gap: 1,
          alignItems: "center"
        }}>Machine code: {machineCode?.map(chunk => <Box key={chunk} sx={{ padding: theme.spacing(0.5, 1), borderRadius: theme.spacing(0.5), background: theme.palette.color.dark}}>{chunk}</Box>)?? "N/A"}
      </Typography>
      </Box>
      <Box sx={{
        color: red[500],
        fontWeight: 500
      }}>
        {errorMessage ? `Error: ${errorMessage}` : null}
      </Box>
    </Paper>
  )
}

export default Home
