import 'intersection-observer'
import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { useIsVisible } from 'react-is-visible'
import { ThemeColor, Typography } from 'utils/constants'

const useStyles = (props: any) =>
  createUseStyles({
    container: {
      width: '100%',
      margin: '1rem 0',
      display: 'flex',
    },
    skillContainer: {
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative',
    },
    score: {
      color: '#666',
      position: 'absolute',
      right: '0.25rem',
      bottom: '0.25rem',
      fontSize: Typography.fontSizeText_Small,
      animation: '$scoreOpacity 4s forwards',
    },
    skillFill: {
      backgroundColor: props.color,
      height: '1.5rem',
    },
    skillFill_animate: {
      animation: '$skillBarFill 2s forwards',
    },
    label: {
      fontSize: '1rem',
      fontWeight: 600,
      backgroundColor: ThemeColor.primaryDark,
      minWidth: '6rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '@keyframes skillBarFill': (({ score }) => ({
      from: {
        width: '0%',
      },
      to: {
        width: `${score}%`,
      },
    }))(props),
    '@keyframes scoreOpacity': {
      '0%': {
        opacity: 0,
      },
      '50%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  })

/**
 * Visualizes a given score in a animated progress bar
 */
const SkillBar = ({ className, label, score, color }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref, { once: true })
  const classes = useStyles({ score, color })()
  return (
    <div ref={ref} className={classNames(classes.container, className)}>
      <div className={classes.label}>{label}</div>
      <div className={classes.skillContainer}>
        <div
          className={classNames(classes.skillFill, {
            [classes.skillFill_animate]: isVisible,
          })}
        ></div>
        <div className={classes.score}>{score}%</div>
      </div>
    </div>
  )
}

interface SkillBarProps {
  className?: string
  label: string
  score: string | number
  color: string
}

export default SkillBar
