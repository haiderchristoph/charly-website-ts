import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({ palette, typography }) => ({
  container: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.75rem 0.25rem',
  },
  button: {
    textDecoration: 'none',
    color: palette.text,
    fontWeight: 500,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: typography.fontSize.large,
    '&:hover, &:focus, &$link_isActive': {
      textDecoration: 'underline',
      textDecorationColor: palette.primaryColor.main,
      textDecorationThickness: '4px',
    },
  },
  link_isActive: {},
}))

/**
 * NavItem
 */
const NavItem = ({ name, isActive = false, onClick }: NavItemProps) => {
  const classes = useStyles()
  return (
    <li key={`${name}`} className={classes.container}>
      <button
        className={classNames(classes.button, {
          [classes.link_isActive]: isActive,
        })}
        onClick={() => onClick()}
      >
        {name}
      </button>
    </li>
  )
}

interface NavItemProps {
  name: string
  isActive?: boolean
  onClick: () => void
}

export default NavItem
