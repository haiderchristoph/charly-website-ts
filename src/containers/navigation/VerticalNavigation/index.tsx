import React from 'react'
import { createUseStyles } from 'react-jss'
import { SectionId, ThemeColor } from 'utils/constants'

import NavItem from 'components/displays/NavItem'
import Socials from 'containers/navigation/Socials'
import { ReactComponent as LogoSvg } from '../assets/logo.svg'

const borderThickness = '3px'

const useStyles = createUseStyles({
  container: {
    color: ThemeColor.textWhite,
    width: '7.5rem',
    height: '100vh',
    borderRight: `${borderThickness} solid ${ThemeColor.primaryMain}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: `-${borderThickness}`,
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  logo: {
    flex: 'none',
    width: '7.5rem',
    height: '7.5rem',
    marginLeft: `${borderThickness}`,
  },
})

/**
 * VerticalNavigation
 *
 * Vertical Desktop Navigation version
 */
const VerticalNavigation = () => {
  const classes = useStyles()
  return (
    <nav className={classes.container}>
      <a href={`#${SectionId.LANDING_PAGE}`}>
        <LogoSvg className={classes.logo} />
      </a>
      <ul className={classes.navList}>
        {/* <NavItem name="home" sectionId={SectionId.LANDING_PAGE} />
        <NavItem name="about" sectionId={SectionId.SKILLS_AND_EXPERIENCE} />
        <NavItem name="contact" sectionId={SectionId.CONTACT} /> */}
      </ul>
      <Socials />
    </nav>
  )
}

export default VerticalNavigation
