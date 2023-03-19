import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({ palette }) => ({
  container: {
    padding: '1rem',
    backgroundColor: palette.background,
    color: palette.text,
    overflow: 'hidden',
    transition: 'all .5s',
  },
  horizontalCenteredContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  verticalCenteredContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  fullHeightContainer: {
    minHeight: '100vh',
  },
}))

/**
 * Base container for pages
 */
const Page = ({
  id,
  children,
  className,
  isVerticalCentered = false,
  isHorizontalCentered = false,
  isFullHeight = false,
}: PageProps) => {
  const classes = useStyles()
  return (
    <section
      id={id}
      className={classNames(classes.container, className, {
        [classes.verticalCenteredContainer]: isVerticalCentered,
        [classes.horizontalCenteredContainer]: isHorizontalCentered,
        [classes.fullHeightContainer]: isFullHeight,
      })}
    >
      {children}
    </section>
  )
}

interface PageProps {
  id: string
  children: any
  className?: string
  isVerticalCentered?: boolean
  isHorizontalCentered?: boolean
  isFullHeight?: boolean
}

export default Page
