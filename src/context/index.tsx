import { createContext, useState } from 'react'
import { ContextProps, Data, Theme } from './main.types.tsx'

export const Context = createContext<Data | null>(null)

export default function ContextProvider({ children }: ContextProps) {

  const initalTheme = localStorage.getItem('theme') || 'light'

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [theme, setTheme] = useState<Theme>(initalTheme)

  const data: Data = {
    theme,
    setTheme,
  }

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}