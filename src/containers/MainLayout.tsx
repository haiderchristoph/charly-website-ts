import { createUseStyles } from 'react-jss'
import LandingPage from 'containers/pages/LandingPage'
import AboutPage from 'containers/pages/AboutPage'
import ContactPage from 'containers/pages/ContactPage'
import Navigation from 'containers/navigation/NavigationHandler'
import TechStackPage from 'containers/pages/TechStackPage'
import Footer from './pages/Footer'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
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
      <LandingPage />
      <AboutPage />
      <TechStackPage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default MainLayout
