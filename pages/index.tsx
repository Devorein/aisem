import type { NextPage } from 'next';
import { useState } from 'react';
import { convertInfixToPostfix } from "../libs/convertInfixToPostfix";
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [infixExpression, setInfixExpression] = useState<null | string>(null)
  const [postfixExpression, setPostfixExpression] = useState<null | string>(null)
  return (
    <div className={styles.container}>
      <input onChange={e => setInfixExpression(e.target.value)} value={infixExpression ?? ""}/>
      <div>{postfixExpression}</div>
      <button disabled={!infixExpression} onClick={() => {
        if (infixExpression) {
          setPostfixExpression(convertInfixToPostfix(infixExpression))
        }
      }}>Convert</button>
    </div>
  )
}

export default Home
