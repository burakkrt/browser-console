import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yLight, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CodeBlockLayout, RowNumber } from './index.styled.tsx'

interface Props {
  codeString?: string,
  language?: string,
  theme?: 'dark' | 'light',
  img?: string
  row?: string
}

export default function CodeBlock({ codeString, language, theme, img, row }: Props) {

  if (!img) {


    return (
      <CodeBlockLayout theme={theme}>
        {row && <RowNumber>{row}</RowNumber>}
        {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
        {/*@ts-ignore*/}
        <SyntaxHighlighter language={language || 'javascript'} children={codeString} style={theme === 'light' ? a11yDark : a11yLight} showLineNumbers={true} wrapLines={true} />
      </CodeBlockLayout>
    )
  } else {
    return (
      <CodeBlockLayout theme={theme}>
        {row && <RowNumber>{row}</RowNumber>}
        <img src={img} alt='rule image' width='100%' />
      </CodeBlockLayout>
    )
  }

}