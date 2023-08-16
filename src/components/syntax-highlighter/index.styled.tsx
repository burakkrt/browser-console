import styled from 'styled-components'

const colors = {
  darkColors: {
    text: '#FFBA86',
    number: '#F6635C',
    console: '#FFF3DA',
    method: '#EBE76C',
    keyword: '#85E6C5',
    objectKey: '#C4C1A4',
    lineNumber: '#749BC2',
  },
  lightColors: {
    text: '#E48586',
    number: '#E48586',
    console: '#A084E8',
    method: '#FF5200',
    keyword: '#614BC3',
    objectKey: '#5B9A8B',
    lineNumber: '#47A992',
  },
}

export const CodeBlockLayout = styled.div<{ theme?: 'dark' | 'light' }>`

  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  pre {
    border-radius: 4px;
  }

  .token.string {
    color: ${props => props.theme === 'light' ? colors.darkColors.text : colors.lightColors.text}
  }

  .token.number {
    color: ${props => props.theme === 'light' ? colors.darkColors.number : colors.lightColors.number}
  }

  .token.console {
    color: ${props => props.theme === 'light' ? colors.darkColors.console : colors.lightColors.console}
  }

  .token.method {
    color: ${props => props.theme === 'light' ? colors.darkColors.method : colors.lightColors.method}
  }

  .token.keyword {
    color: ${props => props.theme === 'light' ? colors.darkColors.keyword : colors.lightColors.keyword}
  }

  .token.literal-property {
    color: ${props => props.theme === 'light' ? colors.darkColors.objectKey : colors.lightColors.objectKey}
  }

  .comment.linenumber {
    color: ${props => props.theme === 'light' ? colors.darkColors.lineNumber : colors.lightColors.lineNumber}
  }
`

export const RowNumber = styled.h3`
  display: block;
  width: 70px;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 14px;

  &:after {
    content: "...";
    padding-left: 2px;
  }
`