import { createUseStyles } from 'react-jss'
import './styles.scss'

// ToDo: move component to separate repo

const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
})

/**
 * AnimatedBackground
 */
const AnimatedBackground = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {[...Array(30)].map(() => (
        <div className="particle"></div>
      ))}
    </div>
  )
}

export default AnimatedBackground
