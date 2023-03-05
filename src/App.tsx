import React from 'react'
import MainLayout from './containers/MainLayout'
import { polyfill } from 'seamless-scroll-polyfill'

function App() {
  polyfill()
  return <MainLayout />
}

export default App
