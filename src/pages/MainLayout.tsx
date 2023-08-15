import { ReactNode, useContext, useEffect } from 'react'
import { Container } from '../components/main.styled.tsx'
import { Context } from '../context'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {

  // @ts-ignore
  const { theme } = useContext(Context)

  useEffect(() => {
    const rootElement = document.querySelector('#root') as HTMLElement

    if (theme === 'dark') {
      rootElement.style.backgroundColor = '#2C3333'
    } else if (theme === 'light') {
      rootElement.style.backgroundColor = '#F6F1F1'
    }
  }, [theme])

  return (
    <Container theme={theme}>
      {children}
    </Container>
  )
}