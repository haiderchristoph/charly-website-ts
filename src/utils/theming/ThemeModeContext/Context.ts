import { createContext } from 'react'
import { ThemeMode } from '../constants'

export type ThemeModeContextValue = {
  themeMode: string
  setThemeMode: (mode: string) => void
}
export const ThemeModeContext = createContext<ThemeModeContextValue>({
  themeMode: ThemeMode.DARK,
  setThemeMode: () => {},
})
