import { useState } from 'react'
import MainLayout from './containers/MainLayout'
import { polyfill } from 'seamless-scroll-polyfill'
import { ThemeProvider } from 'react-jss'
import { lightTheme, darkTheme } from 'utils/theming/theme'
import { ThemeMode } from 'utils/theming/constants'
import { ThemeModeContext } from 'utils/theming/ThemeModeContext/Context'

function App() {
  const [themeMode, setThemeMode] = useState(ThemeMode.DARK)
  polyfill()
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider
        theme={themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme}
      >
        <MainLayout />
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default App
