import { useState } from 'react'
import { ThemeProvider } from 'react-jss'
import { polyfill } from 'seamless-scroll-polyfill'
import useLocalStorage from 'utils/hooks/useLocalStorage'
import { ThemeMode } from 'utils/theming/constants'
import { darkTheme, lightTheme } from 'utils/theming/theme'
import { ThemeModeContext } from 'utils/theming/ThemeModeContext/Context'
import MainLayout from './containers/MainLayout'

function App() {
  const [initialThemeMode, setStorageThemeMode] = useLocalStorage<string>(
    'themeMode',
    ThemeMode.DARK
  )
  const [themeMode, setThemeMode] = useState(initialThemeMode)

  const handleSetThemeMode = (newValue: string) => {
    setThemeMode(newValue)
    setStorageThemeMode(newValue)
  }

  polyfill()
  return (
    <ThemeModeContext.Provider
      value={{ themeMode, setThemeMode: handleSetThemeMode }}
    >
      <ThemeProvider
        theme={themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme}
      >
        <MainLayout />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default App
