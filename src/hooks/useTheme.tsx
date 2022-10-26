import { Draft } from '@reduxjs/toolkit'
import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeEnum as Theme } from '@/enums/theme.enum'
import { ThemeContextType, ThemeProviderProps } from '@/interface/theme.interface'
import { Dispatch, State } from '@/store'
import { setThemeState } from '@/store/modules/common.store'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  const { theme: mode } = useSelector((state: Draft<State>) => state.common)
  const dispatch = useDispatch<Dispatch>()

  const value = useMemo(() => ({ theme }), [theme])

  const toggleTheme = useCallback(() => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK)
      document.documentElement.classList.add(Theme.DARK)
      dispatch(setThemeState(Theme.DARK))
    } else {
      setTheme(Theme.LIGHT)
      document.documentElement.classList.remove(Theme.DARK)
      dispatch(setThemeState(Theme.LIGHT))
    }
  }, [theme])

  useEffect(() => {
    if (mode) {
      setTheme(mode as Theme)
      dispatch(setThemeState(mode))
      document.documentElement.classList.add(mode)
    } else {
      const value = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.DARK
        : Theme.LIGHT
      setTheme(value)
      dispatch(setThemeState(value))
      document.documentElement.classList.add(value)
    }
  }, [mode])

  return (
    <ThemeContext.Provider value={{ theme: value.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
