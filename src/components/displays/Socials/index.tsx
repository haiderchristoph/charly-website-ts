import { createUseStyles } from 'react-jss'
import { SectionId, ThemeColor, SocialLinks } from 'utils/constants'
import { ReactComponent as FacebookSvg } from './assets/facebook.svg'
import { ReactComponent as GithubSvg } from './assets/github.svg'
import { ReactComponent as LinkedinSvg } from './assets/linkedin.svg'
import { ReactComponent as MailSvg } from './assets/mail.svg'

const useStyles = createUseStyles({
  socialIcon: {
    color: ThemeColor.primaryMain,
    width: '29px',
    transition: 'ease-in-out 0.1s',
    '&:hover, &:focus-within': {
      color: ThemeColor.primaryLight,
      width: '32px',
    },
  },
  socialsContainer: {
    position: 'absolute',
    bottom: '1rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '35px',
  },
  link: {
    minWidth: '35px',
    minHeight: '35px',
    margin: '0 0.5rem',
  },
})

const Socials = () => {
  const classes = useStyles()
  return (
    <div className={classes.socialsContainer}>
      <a
        className={classes.link}
        href={SocialLinks.GITHUB}
        rel="noreferrer"
        target="_blank"
      >
        <GithubSvg className={classes.socialIcon} />
      </a>
      <a
        className={classes.link}
        href={SocialLinks.FACEBOOK}
        rel="noreferrer"
        target="_blank"
      >
        <FacebookSvg className={classes.socialIcon} />
      </a>
      <a className={classes.link} href={SocialLinks.LINKEDIN} rel="noreferrer" target="_blank">
        <LinkedinSvg className={classes.socialIcon} />
      </a>
      <a className={classes.link} href={`#${SectionId.CONTACT}`}>
        <MailSvg className={classes.socialIcon} />
      </a>
    </div>
  )
}

export default Socials
