import React from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeColor } from 'utils/constants'

const useStyles = createUseStyles({
  link: {
    textDecoration: 'none',
    padding: '0 0.5rem',
    color: ThemeColor.textWhite,
    opacity: '0.5',
    '&:hover, &focus': {
      color: ThemeColor.primaryMain,
      opacity: '1',
    },
  },
})

/**
 * SocialItem
 */
const SocialItem = ({ url, Icon }: SocialItemProps) => {
  const classes = useStyles()
  return (
    <a className={classes.link} href={url} rel="noreferrer" target="_blank">
      <Icon />
    </a>
  )
}

interface SocialItemProps {
  url: string
  Icon: any
}

export default SocialItem
