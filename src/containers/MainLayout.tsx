import React from 'react'
import { createUseStyles } from 'react-jss'
import LandingPage from 'containers/pages/NewLandingPage'
import AboutPage from 'containers/pages/AboutPage'
import ContactPage from 'containers/pages/ContactPage'
import Navigation from 'containers/navigation/NavigationHandler'

const useStyles = createUseStyles({
  container: {
    // display: 'flex',
  },
  scrollContainer: {
    maxHeight: '100vh',
    overflow: 'scroll',
    width: '100%',
    paddingRight: '7.5rem',
    scrollBehavior: 'smooth',
  },
  '@media (max-width: 1024px)': {
    scrollContainer: {
      paddingRight: 0,
    },
  },
})

/**
 * MainLayout
 */
const MainLayout = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Navigation />
      {/* <div className={classes.scrollContainer}> */}
      <LandingPage />
      <AboutPage />
      <ContactPage />
      {/* </div> */}
    </div>
  )
}

export default MainLayout
