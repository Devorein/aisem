import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { convertInfixToPostfix } from "../libs/convertInfixToPostfix";
import convertPostfixToAssembly from '../libs/convertPostfixToAssembly';
import styles from '../styles/Home.module.css';
import { AssemblyOperation } from '../types';

const Flex = styled.div`
  display: flex;
`

const Home: NextPage = () => {
  const [infixExpression, setInfixExpression] = useState<null | string>(null)
  const [postfixExpression, setPostfixExpression] = useState<null | string>(null);
  const [assemblyOperations, setAssemblyOperations] = useState<AssemblyOperation[]>([]);

  return (
    <div className={styles.container}>
      <TextField onChange={e => setInfixExpression(e.target.value)} value={infixExpression ?? ""}/>
      <Box>{postfixExpression}</Box>
      <Flex>
        <Button variant="contained" disabled={!infixExpression} onClick={() => {
          if (infixExpression) {
            setPostfixExpression(convertInfixToPostfix(infixExpression))
          }
        }}>Convert to Postfix</Button>
        <Button onClick={() => {
          if (postfixExpression) {
            setAssemblyOperations(convertPostfixToAssembly(postfixExpression))
          }
        }} variant="contained" disabled={!postfixExpression}>
          Convert to MIPS
        </Button>
      </Flex>

      {assemblyOperations.length !== 0 && <Box>
        {assemblyOperations.map(({operands, destination, operation}) => {
          return <Flex key={operation + destination + operands.join(" ")}>
            <span>{operation}</span> 
            <span>$t{destination}</span>
            {operands.map((operand, operandIndex) => <span key={operand}>$s{operand}{operandIndex === operands.length - 1 ? "" : ", "}</span>)}
          </Flex>
        })}
      </Box>}
    </div>
  )
}

export default Home
