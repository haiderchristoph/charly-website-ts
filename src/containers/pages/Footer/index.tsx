import Socials from 'components/displays/Socials'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({ palette, typography }) => ({
  container: {
    width: '100%',
    color: palette.text,
    textAlign: 'center',
    fontSize: typography.fontSize.small,
    marginBottom: '2rem',
    marginTop: '4rem',
  },
  year: {
    fontSize: '1rem',
  },
  name: {
    color: palette.primaryColor.main,
    opacity: 1,
  },
  socialsContainer: {
    maxWidth: '20rem',
    margin: '0 auto',
    marginBottom: '1rem',
  },
}))

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
      <span>
        &copy; <span className={classes.year}> {new Date().getFullYear()}</span>{' '}
        Designed & built by{' '}
      </span>
      <span className={classes.name}>Christoph Haider</span>
    </footer>
  )
}

export default Footer
