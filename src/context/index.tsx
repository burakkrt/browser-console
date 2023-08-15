import { createContext, useState } from 'react'
import { Data, Theme } from './main.types.tsx'

export const Context = createContext<Data | null>(null)

export default function ContextProvider({ children }: any) {

  const [theme, setTheme] = useState<Theme>('light')

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