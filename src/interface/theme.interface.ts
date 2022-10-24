import { ReactNode } from 'react'

import { ThemeEnum as Theme } from '@/enums/theme.enum'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export type ThemeProviderProps = {
  children: ReactNode
}
