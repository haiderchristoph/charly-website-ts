import Socials from 'components/displays/Socials'
import { createUseStyles } from 'react-jss'
import { ThemeColor, Typography } from 'utils/constants'

const useStyles = createUseStyles({
  container: {
    width: '100%',
    color: ThemeColor.textWhite,
    textAlign: 'center',
    fontSize: Typography.fontSizeText_Small,
    marginBottom: '2rem',
    marginTop: '4rem',
  },
  text: {
    opacity: '0.3',
  },
  year: {
    fontSize: '1rem',
  },
  name: {
    color: ThemeColor.primaryMain,
    opacity: 1,
  },
  socialsContainer: {
    maxWidth: '20rem',
    margin: '0 auto',
    marginBottom: '1rem',
  },
})

/**
 * Footer
 */
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      <div className={classes.socialsContainer}>
        <Socials />
      </div>
      <span className={classes.text}>
        &copy; <span className={classes.year}> {new Date().getFullYear()}</span>{' '}
        Designed & built by{' '}
      </span>
      <span className={classes.name}>Christoph Haider</span>
    </footer>
  )
}

export default Footer
