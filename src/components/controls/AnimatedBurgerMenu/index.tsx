import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { ThemeColor } from 'utils/constants'
import { ReactComponent as BurgerMenuSvg } from './assets/burger.svg'

const useStyles = createUseStyles({
  menuButton_animate__in: {},
  menuButton_animate__out: {},
  menuButton: {
    zIndex: 10000,
    color: ThemeColor.primaryMain,
    '&$menuButton_animate__in': {
      color: ThemeColor.textWhite, // fix for safari
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
      color: ThemeColor.primaryMain,
    },
    '90%': {
      color: ThemeColor.textWhite,
    },
    '100%': {
      color: ThemeColor.textWhite,
      transform: 'rotate(315deg)',
    },
  },
  '@keyframes animationMenuTopIn': {
    '0%': {
      color: ThemeColor.primaryMain,
    },
    '10%': {
      color: ThemeColor.textWhite,
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
      color: ThemeColor.primaryMain,
    },
    '10%': {
      color: ThemeColor.textWhite,
    },
    '40%': {
      transform: 'translate(0, -8px)',
      color: ThemeColor.textWhite,
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
      color: ThemeColor.primaryMain,
    },
    '90%': {
      color: ThemeColor.textWhite,
    },
    '100%': {
      color: ThemeColor.textWhite,
      transform: 'rotate(225deg)',
    },
  },
  '@keyframes animationCenterOut': {
    '0%': {
      color: ThemeColor.textWhite,
      transform: 'rotate(315deg)',
    },
    '90%': {
      color: ThemeColor.primaryMain,
    },
    '100%': {
      color: ThemeColor.primaryMain,
    },
  },
  '@keyframes animationMenuTopOut': {
    '0%': {
      transform: 'translate(0, 8px)',
      color: ThemeColor.textWhite,
      opacity: 0,
    },
    '60%': {
      opacity: 0,
      color: ThemeColor.textWhite,
    },
    '100%': {
      opacity: 1,
      color: ThemeColor.primaryMain,
    },
  },
  '@keyframes animationMenuBottomOut': {
    '0%': {
      transform: 'translate(0, -8px)',
      opacity: 0,
      color: ThemeColor.textWhite,
    },
    '60%': {
      opacity: 0,
      color: ThemeColor.textWhite,
    },
    '100%': {
      color: ThemeColor.primaryMain,
      opacity: 1,
    },
  },
  '@keyframes animationCenter2Out': {
    '0%': {
      color: ThemeColor.textWhite,
      transform: 'rotate(225deg)',
    },
    '90%': {
      color: ThemeColor.primaryMain,
    },
    '100%': {
      color: ThemeColor.primaryMain,
    },
  },
})

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
