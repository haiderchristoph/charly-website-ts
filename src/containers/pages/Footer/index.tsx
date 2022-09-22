import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
    opacity: '0.3',
    fontSize: '0.85rem',
    marginBottom: '2rem',
    position: 'absolute',
    bottom: '1rem',
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
