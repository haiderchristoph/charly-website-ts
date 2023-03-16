import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { SectionId, ThemeColor } from 'utils/constants'
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'

import NavItem from 'components/displays/NavItem'
import Socials from 'components/displays/Socials'

const borderThickness = '3px'

const useStyles = createUseStyles({
  menuOverlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: ThemeColor.backgroundDark,
    zIndex: '11',
    opacity: 0,
    '&$menuOverlay_animate_in': {
      animation: '$overlayIn 1s forwards',
    },
    '&$menuOverlay_animate_out': {
      animation: '$overlayOut 1s forwards',
    },
  },
  '@keyframes overlayIn': {
    '0%': {
      opacity: 0,
      transform: 'translate(0, -400px)',
    },
    '50%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes overlayOut': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
      transform: 'translate(0, -1000px)',
    },
  },
  menuOverlay_animate_in: {},
  menuOverlay_animate_out: {},
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    marginBottom: '2rem',
    '& > li': {
      padding: '1.75rem 0.25rem',
    },
    '& > li:not(:last-child)': {
      borderBottom: `1px solid ${ThemeColor.textWhite}`,
    },
  },
  logoContainer: {
    backgroundColor: ThemeColor.primaryMain,
    height: '3rem',
    width: '100%',
  },
  logo: {
    flex: 'none',
    width: '3rem',
    height: '3rem',
    marginLeft: `${borderThickness}`,
  },
})

/**
 * MenuPopover
 *
 * Mobile Navigation menu popover
 */
const MenuPopover = ({
  isOpen,
  onClose,
  shouldAnimateOut,
}: MenuPopoverProps) => {
  const classes = useStyles()
  const handleClose = (id: string) => {
    console.log(id)
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }
  return (
    <>
      {isOpen && (
        <div
          className={classNames(classes.menuOverlay, {
            [classes.menuOverlay_animate_in]: isOpen && !shouldAnimateOut,
            [classes.menuOverlay_animate_out]: isOpen && shouldAnimateOut,
          })}
        >
          <div className={classes.logoContainer}>
            <a href={`#${SectionId.LANDING_PAGE}`} onClick={onClose}>
              <LogoSvg className={classes.logo} />
            </a>
          </div>
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              <NavItem
                name="home"
                onClick={() => handleClose(SectionId.LANDING_PAGE)}
              />
              <NavItem
                name="about"
                onClick={() => handleClose(SectionId.SKILLS_AND_EXPERIENCE)}
              />
              <NavItem
                name="tech stack"
                onClick={() => handleClose(SectionId.TECH_STACK)}
              />
              <NavItem
                name="contact"
                onClick={() => handleClose(SectionId.CONTACT)}
              />
            </ul>
            <Socials />
          </nav>
        </div>
      )}
    </>
  )
}

interface MenuPopoverProps {
  isOpen: boolean
  shouldAnimateOut: boolean
  onClose: () => void
}

export default MenuPopover
