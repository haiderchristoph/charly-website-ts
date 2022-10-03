import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { ReactComponent as DownArrowIcon } from './assets/down-arrow.svg'
import { SectionId, ThemeColor } from 'utils/constants'

const pageText = {
  moreInfo: 'more info',
}

const useStyles = createUseStyles({
  containerLink: {
    color: ThemeColor.primaryMain,
    borderRadius: '2px',
    border: `2px solid ${ThemeColor.primaryMain}`,
    boxShadow: `0px 0px 2px 1px ${ThemeColor.primaryMain}`,
    padding: '0.5rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    width: '7rem',
    fontSize: '1.25rem',
    fontWeight: 500,
    justifyContent: 'space-between',
    paddingRight: '0.75rem',
    margin: '0 auto',
    marginTop: '3rem',
    position: 'absolute',
    bottom: '8rem',
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
      backgroundColor: ThemeColor.primaryMain,
      color: ThemeColor.textWhite,
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
})

/**
 * A button fashioned link to another section
 */
const ArrowLink = () => {
  const classes = useStyles()
  const [wasHovered, setWasHovered] = useState(false)
  return (
    <a
      className={classNames(classes.containerLink)}
      href={`#${SectionId.SKILLS_AND_EXPERIENCE}`}
      onMouseEnter={() => setWasHovered(true)}
    >
      {pageText.moreInfo}
      <DownArrowIcon
        className={classNames(classes.icon, {
          [classes.icon_wasHovered]: wasHovered,
        })}
      />
    </a>
  )
}

export default ArrowLink
