declare global {
  namespace Jss {
    export interface Theme {
      palette: {
        primaryColor: {
          main: string
          darker: string
          lighter: string
        }
        text: string
        background: string
        inputBackground: string
      }
      typography: {
        fontSize: {
          small: string
          medium: string
          regular: string
          large: string
          smallHeadline: string
          headline: string
        }
      }
    }
  }
}

export {}
