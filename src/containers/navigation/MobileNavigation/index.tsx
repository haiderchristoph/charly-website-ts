import { useState } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

import MenuPopover from './MenuPopover'
import AnimatedBurgerMenu from 'components/controls/AnimatedBurgerMenu'

const useStyles = createUseStyles({
  burgerMenuButton: {
    padding: '0.25rem',
    paddingBottom: '0.125rem',
    zIndex: 12,
    position: 'fixed',
    right: '1rem',
    top: '1rem',
    cursor: 'pointer',
    '&$burgerMenuButton_open': {
      // deactivate the background is looks weird, at least temporarily
      // background: 'rgba(29, 29, 29, 0.7)',
      // borderRadius: '4px',
      // transition: 'all 0.5s',
    },
    '&$burgerMenuButton_close': {},
  },
  themeButton: {
    position: 'fixed',
    top: '1rem',
    right: '4rem',
    zIndex: 12,
  },
  burgerMenuButton_close: {},
  burgerMenuButton_open: {},
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
        className={classNames(classes.burgerMenuButton, {
          [classes.burgerMenuButton_close]: isMenuOpen,
          [classes.burgerMenuButton_open]: !isMenuOpen,
        })}
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
