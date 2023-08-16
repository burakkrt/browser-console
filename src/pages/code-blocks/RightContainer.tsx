import styled from 'styled-components'
import { CodeBlockLayout } from '../../components/syntax-highlighter/index.styled.tsx'
import React, { useContext } from 'react'
import CodeBlock from '../../components/syntax-highlighter'
import { Context } from '../../context'

export const ConsoleGroup = styled.ul`
  margin-left: 2rem;

  span {
    font-weight: bold;
    margin-left: 0;
  }
`

export default function RightContainer() {

  const state = useContext(Context)

  return (
    <React.Fragment>
      <CodeBlockLayout id='dasd'>
        <CodeBlock img='/rules/rule1.png' language='javascript' theme={state?.theme} row='1' />
        <CodeBlock img='/rules/rule2.png' language='javascript' theme={state?.theme} row='2' />
        <CodeBlock img='/rules/rule3.png' language='javascript' theme={state?.theme} row='3' />
        <CodeBlock img='/rules/rule4.png' language='javascript' theme={state?.theme} row='4' />
        <CodeBlock img='/rules/rule5.png' language='javascript' theme={state?.theme} row='5' />
        <CodeBlock img='/rules/rule6.png' language='javascript' theme={state?.theme} row='6' />
        <CodeBlock img='/rules/rule7.png' language='javascript' theme={state?.theme} row='7' />
        <CodeBlock img='/rules/rule8.png' language='javascript' theme={state?.theme} row='8' />
      </CodeBlockLayout>
    </React.Fragment>
  )
}