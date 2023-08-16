import { ReactNode, useContext, useEffect } from 'react'
import { Container } from './main.styled.tsx'
import { Context } from '../../context'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {

  const state = useContext(Context)

  useEffect(() => {
    const rootElement = document.querySelector('#root') as HTMLElement

    if (state?.theme === 'dark') {
      rootElement.style.backgroundColor = '#2C3333'
    } else if (state?.theme === 'light') {
      rootElement.style.backgroundColor = '#F6F1F1'
    }
  }, [state?.theme])

  return (
    <Container theme={state?.theme}>
      {children}
    </Container>
  )
}