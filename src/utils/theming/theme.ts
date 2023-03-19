import { DefaultTheme } from 'react-jss'

const typography = {
  fontSize: {
    small: '0.85rem',
    medium: '1rem',
    regular: '1.125rem',
    large: '1.25rem',
    smallHeadline: '1.5rem',
    headline: '2rem',
  },
}

export const darkTheme: DefaultTheme = {
  palette: {
    primaryColor: {
      main: '#27B8B3',
      darker: '#31615F',
      lighter: '#2FE0DA',
    },
    text: '#f5f5f5',
    background: '#1d1d1d',
    inputBackground: '#332F2E',
  },
  typography,
}

export const lightTheme: DefaultTheme = {
  palette: {
    primaryColor: {
      main: '#27B8B3',
      darker: '#31615F',
      lighter: '#2FE0DA',
    },
    background: '#f5f5f5',
    text: '#1d1d1d',
    inputBackground: '#d1d1d1',
  },
  typography,
}
