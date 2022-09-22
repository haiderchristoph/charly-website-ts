import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { ThemeColor } from 'utils/constants'

const useStyles = createUseStyles({
  container: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.75rem 0.25rem',
  },
  link: {
    textDecoration: 'none',
    color: ThemeColor.textWhite,
    fontWeight: 500,
    fontSize: '1.25rem',
    '&:hover, &:focus, &$link_isActive': {
      textDecoration: 'underline',
      textDecorationColor: ThemeColor.primaryMain,
      textDecorationThickness: '4px',
    },
  },
  link_isActive: {},
})

/**
 * NavItem
 */
const NavItem = ({
  name,
  sectionId,
  isActive = false,
  onClick,
}: NavItemProps) => {
  const classes = useStyles()
  console.log(isActive)
  return (
    <li className={classes.container}>
      <a
        className={classNames(classes.link, {
          [classes.link_isActive]: isActive,
        })}
        href={`#${sectionId}`}
        {...(onClick ? { onClick } : null)}
      >
        {name}
      </a>
    </li>
  )
}

interface NavItemProps {
  name: string
  sectionId: string
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export default NavItem
