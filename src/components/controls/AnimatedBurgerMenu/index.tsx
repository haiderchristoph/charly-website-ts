import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { ReactComponent as BurgerMenuSvg } from './assets/burger.svg'

const useStyles = createUseStyles(({ palette }) => ({
  menuButton_animate__in: {},
  menuButton_animate__out: {},
  menuButton: {
    zIndex: 10000,
    color: palette.primaryColor.main,
    '&$menuButton_animate__in': {
      color: palette.white, // fix for safari
      '& #center1': {
        transformOrigin: 'center',
        animation: '$animationCenterIn 1s forwards',
      },
      '& #center2': {
        transformOrigin: 'center',
        animation: '$animationCenter2In 1s forwards',
      },
      '& #top': {
        animation: '$animationMenuTopIn 1s forwards',
      },
      '& #bottom': {
        animation: '$animationMenuBottomIn 1s forwards',
      },
    },
    '&$menuButton_animate__out': {
      '& #center1': {
        transformOrigin: 'center',
        animation: '$animationCenterOut 1s forwards',
      },
      '& #center2': {
        transformOrigin: 'center',
        animation: '$animationCenter2Out 1s forwards',
      },
      '& #top': {
        animation: '$animationMenuTopOut 1s forwards',
      },
      '& #bottom': {
        animation: '$animationMenuBottomOut 1s forwards',
      },
    },
  },
  '@keyframes animationCenterIn': {
    '0%': {
      color: palette.primaryColor.main,
    },
    '90%': {
      color: palette.white,
    },
    '100%': {
      color: palette.white,
      transform: 'rotate(315deg)',
    },
  },
  '@keyframes animationMenuTopIn': {
    '0%': {
      color: palette.primaryColor.main,
    },
    '10%': {
      color: palette.white,
    },
    '40%': {
      transform: 'translate(0, 8px)',
    },
    '60%': {
      opacity: 0,
    },
    '100%': {
      opacity: 0,
      transform: 'translate(0, 8px)',
    },
  },
  '@keyframes animationMenuBottomIn': {
    '0%': {
      color: palette.primaryColor.main,
    },
    '10%': {
      color: palette.white,
    },
    '40%': {
      transform: 'translate(0, -8px)',
      color: palette.white,
    },
    '60%': {
      opacity: 0,
    },
    '100%': {
      transform: 'translate(0, -8px)',
      opacity: 0,
    },
  },
  '@keyframes animationCenter2In': {
    '0%': {
      color: palette.primaryColor.main,
    },
    '90%': {
      color: palette.white,
    },
    '100%': {
      color: palette.white,
      transform: 'rotate(225deg)',
    },
  },
  '@keyframes animationCenterOut': {
    '0%': {
      color: palette.white,
      transform: 'rotate(315deg)',
    },
    '90%': {
      color: palette.primaryColor.main,
    },
    '100%': {
      color: palette.primaryColor.main,
    },
  },
  '@keyframes animationMenuTopOut': {
    '0%': {
      transform: 'translate(0, 8px)',
      color: palette.white,
      opacity: 0,
    },
    '60%': {
      opacity: 0,
      color: palette.white,
    },
    '100%': {
      opacity: 1,
      color: palette.primaryColor.main,
    },
  },
  '@keyframes animationMenuBottomOut': {
    '0%': {
      transform: 'translate(0, -8px)',
      opacity: 0,
      color: palette.white,
    },
    '60%': {
      opacity: 0,
      color: palette.white,
    },
    '100%': {
      color: palette.primaryColor.main,
      opacity: 1,
    },
  },
  '@keyframes animationCenter2Out': {
    '0%': {
      color: palette.white,
      transform: 'rotate(225deg)',
    },
    '90%': {
      color: palette.primaryColor.main,
    },
    '100%': {
      color: palette.primaryColor.main,
    },
  },
}))

/**
 * AnimatedBurgerMenu
 */
const AnimatedBurgerMenu = ({
  shouldAnimateOut,
  shouldAnimateIn,
}: AnimatedBurgerMenuProps) => {
  const classes = useStyles()
  return (
    <BurgerMenuSvg
      className={classNames(classes.menuButton, {
        [classes.menuButton_animate__in]: shouldAnimateIn,
        [classes.menuButton_animate__out]: shouldAnimateOut,
      })}
    />
  )
}
interface AnimatedBurgerMenuProps {
  shouldAnimateOut: boolean
  shouldAnimateIn: boolean
}
export default AnimatedBurgerMenu
