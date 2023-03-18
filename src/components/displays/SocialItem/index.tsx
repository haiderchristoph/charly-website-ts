import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({ palette }) => ({
  link: {
    textDecoration: 'none',
    padding: '0 0.5rem',
    color: palette.text,
    opacity: '0.5',
    '&:hover, &focus': {
      color: palette.primaryColor.main,
      opacity: '1',
    },
  },
}))

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
