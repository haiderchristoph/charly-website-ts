import { useState } from 'react'
import MainLayout from './containers/MainLayout'
import { polyfill } from 'seamless-scroll-polyfill'
import { ThemeProvider } from 'react-jss'
import { lightTheme, darkTheme } from 'utils/theming/theme'
import { ThemeMode } from 'utils/theming/constants'
import { ThemeModeContext } from 'utils/theming/ThemeModeContext/Context'
import useLocalStorage from 'utils/hooks/useLocalStorage'

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
