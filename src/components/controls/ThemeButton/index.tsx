import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { ReactComponent as SunBeamsSvg } from './assets/sun-beams.svg'
import { useContext } from 'react'
import { ThemeModeContext } from 'utils/theming/ThemeModeContext/Context'
import { ThemeMode } from 'utils/theming/constants'

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
    overflow: 'hidden',
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
    },
    '100%': {
      transform: 'rotate(360deg)',
      width: '18px',
      height: '18px',
    },
  },
  '@keyframes animateMoonIn': {
    '0%': {
      width: '18px',
      height: '18px',
    },
    '100%': {
      width: '32px',
      height: '32px',
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
      width: '36px',
      height: '36px',
    },
    '100%': {
      width: '36px',
      height: '36px',
      opacity: 0,
    },
  },
  '@keyframes animateBeamsOut': {
    '0%': {
      transform: 'rotate(0)',
      width: '24px',
      height: '24px',
      opacity: 0,
    },
    '100%': {
      transform: 'rotate(180deg)',
      width: '36px',
      height: '36px',
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
    // toogle the theme mode
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
