import ThemeButton from 'components/controls/ThemeButton'
import Navigation from 'containers/navigation'
import AboutPage from 'containers/pages/AboutPage'
import ContactPage from 'containers/pages/ContactPage'
import LandingPage from 'containers/pages/LandingPage'
import TechStackPage from 'containers/pages/TechStackPage'
import { createUseStyles } from 'react-jss'
import Footer from './pages/Footer'

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
