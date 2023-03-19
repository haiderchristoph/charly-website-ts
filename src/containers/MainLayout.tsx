import { createUseStyles } from 'react-jss'
import LandingPage from 'containers/pages/LandingPage'
import AboutPage from 'containers/pages/AboutPage'
import ContactPage from 'containers/pages/ContactPage'
import Navigation from 'containers/navigation/NavigationHandler'
import TechStackPage from 'containers/pages/TechStackPage'
import Footer from './pages/Footer'
import ThemeButton from 'components/controls/ThemeButton'

const useStyles = createUseStyles(({ palette }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    position: 'relative',
    backgroundColor: palette.background,
    transition: 'all .5s',
  },
  '@media (max-width: 1024px)': {
    scrollContainer: {
      paddingRight: 0,
    },
  },
  button: {
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    width: '2rem',
    zIndex: 1,
  },
  themeButton: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 1,
    '@media (min-width: 769px)': {
      left: '50%',
    },
  },
}))

/**
 * MainLayout
 */
const MainLayout = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <ThemeButton className={classes.themeButton} />
      <Navigation />
      <LandingPage />
      <AboutPage />
      <TechStackPage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default MainLayout
