import { createUseStyles } from 'react-jss'
import { ThemeColor } from 'utils/constants'
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
  const url = 'https://www.google.com'
  return (
    <div className={classes.socialsContainer}>
      <a
        className={classes.link}
        href="https://github.com/haidercharly"
        rel="noreferrer"
        target="_blank"
      >
        <GithubSvg className={classes.socialIcon} />
      </a>
      <a
        className={classes.link}
        href="https://www.facebook.com/christoph.haider2"
        rel="noreferrer"
        target="_blank"
      >
        <FacebookSvg className={classes.socialIcon} />
      </a>
      <a className={classes.link} href={url} rel="noreferrer" target="_blank">
        <LinkedinSvg className={classes.socialIcon} />
      </a>
      <a className={classes.link} href={url} rel="noreferrer" target="_blank">
        <MailSvg className={classes.socialIcon} />
      </a>
    </div>
  )
}

export default Socials
