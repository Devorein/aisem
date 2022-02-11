import styled from '@emotion/styled';
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
  const [machineCode, setMachineCode] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  return (
    <Paper sx={{
      height: "100%"
    }}>
      <TextField onChange={e => setAssemblyInstruction(e.target.value)} value={assemblyInstruction} />
      <Flex>
        <Button variant="contained" disabled={!assemblyInstruction} onClick={() => {
          if (assemblyInstruction) {
            try {
              const machineCodeChunks = convertToMachineCode(assemblyInstruction);
              setMachineCode(machineCodeChunks!.join(" "))
              setErrorMessage(null)
            } catch (err: any) {
              setErrorMessage(err.message)
            }
          }
        }}>Convert to Machine Code</Button>
      </Flex>
      <Box>
        Machine code: <Typography component="span" sx={{
          fontWeight: 500
        }}>{machineCode}
      </Typography>
      </Box>
      {errorMessage && <Box sx={{
        color: red[500],
        fontWeight: 500
      }}>
        Error: {errorMessage}
      </Box>}
    </Paper>
  )
}

export default Home
