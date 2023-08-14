import classNames from 'classnames'
import { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeMode } from 'utils/theming/constants'
import { ThemeModeContext } from 'utils/theming/ThemeModeContext/Context'
import { ReactComponent as SunBeamsSvg } from './assets/sun-beams.svg'

const useStyles = createUseStyles(({ palette }) => ({
  container: {
    width: '36px',
    height: '36px',
    backgroundColor: 'transparent',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  moon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: palette.primaryColor.main,
    transition: 'all 1s',
    '&$animate_moonOut': {
      animation: '$animateMoonOut 1s forwards',
    },
    '&$animate_moonIn': {
      animation: '$animateMoonIn 1s forwards',
    },
  },
  animate_moonOut: {},
  animate_moonIn: {},
  '@keyframes animateMoonOut': {
    '0%': {
      transform: 'rotate(0)',
      overflow: 'hidden',
    },
    '100%': {
      transform: 'scale(0.5625) rotate(360deg)',
      overflow: 'hidden',
    },
  },
  '@keyframes animateMoonIn': {
    '0%': {
      transform: 'scale(0.57)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  eclipseOverlay: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(25%, -25%)',
    transition: 'all 1s',
    '&$animate_eclipseIn': {
      animation: '$animateEclipseIn 1s forwards',
      animationDelay: '.5s',
    },
    '&$animate_eclipseOut': {
      animation: '$animateEclipseOut 1s forwards',
    },
  },
  animate_eclipseIn: {},
  animate_eclipseOut: {},
  '@keyframes animateEclipseIn': {
    '0%': {
      transform: 'translate(100%, -100%)',
      backgroundColor: 'transparent',
    },
    '50%': {
      backgroundColor: palette.background,
    },
    '100%': {
      transform: 'translate(25%, -25%)',
      backgroundColor: palette.background,
    },
  },
  '@keyframes animateEclipseOut': {
    '0%': {
      transform: 'translate(25%, -25%)',
      backgroundColor: palette.background,
    },
    '50%': {
      backgroundColor: 'transparent',
    },
    '100%': {
      transform: 'translate(100%, -100%)',
      backgroundColor: 'transparent',
    },
  },
  sunbeams: {
    width: '24px',
    height: '24px',
    color: palette.primaryColor.main,
    position: 'absolute',
    '&$animate_beamsOut': {
      animation: '$animateBeamsOut 1s forwards',
    },
    '&$animate_beamsIn': {
      animation: '$animateBeamsIn .3s forwards',
    },
  },
  animate_beamsOut: {},
  animate_beamsIn: {},
  '@keyframes animateBeamsIn': {
    '0%': {
      opacity: 1,
      transform: 'scale(1.33)',
    },
    '100%': {
      transform: 'scale(1.33)',
      opacity: 0,
    },
  },
  '@keyframes animateBeamsOut': {
    '0%': {
      transform: 'scale(1) rotate(0)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(1.33) rotate(180deg)',
      opacity: 1,
    },
  },
}))

/**
 * ThemeButton
 */
const ThemeButton = ({ className }: ThemeButtonProps) => {
  const classes = useStyles()
  const { themeMode, setThemeMode } = useContext(ThemeModeContext)
  const shouldAnimateIn = themeMode === ThemeMode.DARK
  const shouldAnimateOut = themeMode === ThemeMode.LIGHT
  const handleClick = () => {
    setThemeMode(
      themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    )
  }

  return (
    <div
      className={classNames(classes.container, className)}
      onClick={handleClick}
      role="button"
    >
      <div
        className={classNames(classes.moon, {
          [classes.animate_moonOut]: shouldAnimateOut,
          [classes.animate_moonIn]: shouldAnimateIn,
        })}
      >
        <div
          className={classNames(classes.eclipseOverlay, {
            [classes.animate_eclipseIn]: shouldAnimateIn,
            [classes.animate_eclipseOut]: shouldAnimateOut,
          })}
        />
      </div>
      <SunBeamsSvg
        className={classNames(classes.sunbeams, {
          [classes.animate_beamsIn]: shouldAnimateIn,
          [classes.animate_beamsOut]: shouldAnimateOut,
        })}
      />
    </div>
  )
}
interface ThemeButtonProps {
  className?: string
}
export default ThemeButton
