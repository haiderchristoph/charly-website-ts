import { useState } from 'react'
import { createUseStyles } from 'react-jss'

import AnimatedBurgerMenu from 'components/controls/AnimatedBurgerMenu'
import MenuPopover from './MenuPopover'

const useStyles = createUseStyles({
  burgerMenuButton: {
    padding: '0.25rem',
    paddingBottom: '0.125rem',
    zIndex: 12,
    position: 'fixed',
    right: '1rem',
    top: '1rem',
    cursor: 'pointer',
  },
  themeButton: {
    position: 'fixed',
    top: '1rem',
    right: '4rem',
    zIndex: 12,
  },
})

/**
 * MobileNavigation
 */
const MobileNavigation = () => {
  const classes = useStyles()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false)
  const handleToggle = (newValue: boolean) => {
    if (newValue) {
      setIsMenuOpen(newValue)
    } else {
      handleClose()
    }
  }
  const handleClose = () => {
    setShouldAnimateOut(true)
    setTimeout(() => {
      setShouldAnimateOut(false)
      setIsMenuOpen(false)
    }, 1000)
  }
  return (
    <>
      <div
        className={classes.burgerMenuButton}
        onClick={() => handleToggle(!isMenuOpen)}
        role="button"
      >
        <AnimatedBurgerMenu
          shouldAnimateIn={isMenuOpen && !shouldAnimateOut}
          shouldAnimateOut={isMenuOpen && shouldAnimateOut}
        />
      </div>
      <MenuPopover
        isOpen={isMenuOpen}
        onClose={handleClose}
        shouldAnimateOut={shouldAnimateOut}
      />
    </>
  )
}

export default MobileNavigation
