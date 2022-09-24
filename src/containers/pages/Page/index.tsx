import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { ThemeColor } from 'utils/constants'

const useStyles = createUseStyles({
  container: {
    padding: '1rem',
    backgroundColor: ThemeColor.backgroundDark,
    color: ThemeColor.textWhite,
    overflow: 'hidden',
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
})

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
