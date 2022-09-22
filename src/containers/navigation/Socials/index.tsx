import React from 'react'
import { createUseStyles } from 'react-jss'
import SocialItem from 'components/displays/SocialItem'
import { ReactComponent as GithubSvg } from './assets/github.svg'
import { ReactComponent as FacebookSvg } from './assets/facebook.svg'
import { ReactComponent as YouTubeSvg } from './assets/youtube.svg'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

/**
 * Socials
 */
const Socials = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <SocialItem url={'https://github.com/haidercharly'} Icon={GithubSvg} />
      <SocialItem
        url={'https://www.facebook.com/christoph.haider2'}
        Icon={FacebookSvg}
      />
      <SocialItem
        url={'https://www.youtube.com/channel/UC9j5mgPi7qH5N3AzObg32eA'}
        Icon={YouTubeSvg}
      />
    </div>
  )
}

export default Socials
