import { Toggle } from './togglemode.styled.tsx'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context'
import { setLocalStorage } from '../localStorage'

export default function ToogleMode() {

  const state = useContext(Context)
  const [check, setCheck] = useState(state?.theme !== 'light')

  useEffect(() => {
    if (state?.setTheme !== undefined) {
      if (check) {
        state?.setTheme('dark')
      } else if (!check) {
        state?.setTheme('light')
      }
    }
  }, [check])

  useEffect(() => {
    setLocalStorage(state?.theme || '')
  }, [state?.theme])

  return (
    <Toggle theme={state?.theme}>
      <label>
        {state?.theme}
        <input type='checkbox' checked={check} onChange={() => setCheck(!check)} />
      </label>
    </Toggle>
  )
}