import { createUseStyles } from 'react-jss'
import { ThemeColor, Typography } from 'utils/constants'

const useStyles = createUseStyles({
  container: {
    width: '100%',
    color: ThemeColor.textWhite,
    textAlign: 'center',
    opacity: '0.3',
    fontSize: Typography.fontSizeText_Small,
    marginBottom: '2rem',
  },
  year: {
    fontSize: '1rem',
  },
})

/**
 * Footer
 */
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      CHRISTOPH HAIDER &copy;
      <span className={classes.year}> {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
