import { Toggle } from './togglemode.styled.tsx'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'

export default function ToogleMode() {

  // @ts-ignore
  const { theme, setTheme } = useContext(Context)
  const [check, setCheck] = useState(theme !== 'light')

  useEffect(() => {
    if (check) {
      setTheme('dark')
    } else if (!check) {
      setTheme('light')
    }
  }, [check])

  return (
    <Toggle theme={theme}>
      <label>
        {theme}
        <input type='checkbox' checked={check} onChange={() => setCheck(!check)} />
      </label>
    </Toggle>
  )
}