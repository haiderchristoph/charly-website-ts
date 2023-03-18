import React from 'react'
import MainLayout from './containers/MainLayout'
import { polyfill } from 'seamless-scroll-polyfill'
import { ThemeProvider } from 'react-jss'
import theme from 'utils/theming/theme'

function App() {
  polyfill()
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
