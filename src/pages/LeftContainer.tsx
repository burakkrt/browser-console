import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function LeftContainer() {

  const codeString = '(num) => num + 1'

  return (
    <SyntaxHighlighter language='javascript' style={dracula} showLineNumbers wrapLines>
      {codeString}
      Bu repo hala yapım aşamasında.
    </SyntaxHighlighter>
  )
}