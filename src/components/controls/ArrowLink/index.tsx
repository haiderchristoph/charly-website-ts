import classNames from 'classnames'
import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { SectionId } from 'utils/constants'
import { ReactComponent as DownArrowIcon } from './assets/down-arrow.svg'

const pageText = {
  moreInfo: 'more info',
}

const useStyles = createUseStyles(({ palette, typography }) => ({
  button: {
    color: palette.primaryColor.main,
    borderRadius: '2px',
    border: `2px solid ${palette.primaryColor.main}`,
    boxShadow: `0px 0px 2px 1px ${palette.primaryColor.main}`,
    padding: '0.5rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: typography.fontSize.large,
    fontWeight: 500,
    justifyContent: 'space-between',
    paddingRight: '0.75rem',
    margin: '0 auto',
    marginTop: '3rem',
    background: 'transparent',
    cursor: 'pointer',
    '&:hover $icon': {
      animation: '$iconRotateIn 0.5s ease',
      animationFillMode: 'forwards',
    },
    '&:focus-within $icon': {
      animation: '$iconRotateIn 0.5s ease',
      animationFillMode: 'forwards',
    },
    '&:hover, &:focus-within': {
      animation: '$buttonFillIn 0.5s ease forwards',
    },
  },
  '@keyframes buttonFillIn': {
    to: {
      backgroundColor: palette.primaryColor.main,
      color: palette.white,
    },
  },
  '@keyframes iconRotateIn': {
    from: { transform: 'rotate(-90deg)' },
    to: { transform: 'rotate(0)' },
  },
  '@keyframes iconRotateOut': {
    from: { transform: 'rotate(0)' },
    to: { transform: 'rotate(-90deg)' },
  },
  icon: {
    width: '0.85rem',
    transform: 'rotate(-90deg)',
    marginLeft: '0.5rem',

    '&$icon_wasHovered': {
      animation: '$iconRotateOut 0.5s ease',
    },
  },
  icon_wasHovered: {},
}))

/**
 * A button fashioned link to another section
 */
const ArrowLink = ({ className }: { className: string }) => {
  const classes = useStyles()
  const [wasHovered, setWasHovered] = useState(false)
  return (
    <button
      className={classNames(classes.button, className)}
      onClick={() =>
        document
          .querySelector(`#${SectionId.SKILLS_AND_EXPERIENCE}`)
          ?.scrollIntoView({ behavior: 'smooth' })
      }
      onMouseEnter={() => setWasHovered(true)}
    >
      {pageText.moreInfo}
      <DownArrowIcon
        className={classNames(classes.icon, {
          [classes.icon_wasHovered]: wasHovered,
        })}
      />
    </button>
  )
}

export default ArrowLink
