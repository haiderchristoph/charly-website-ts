import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { SectionId, SocialLinks } from 'utils/constants'
import { ReactComponent as FacebookSvg } from './assets/facebook.svg'
import { ReactComponent as GithubSvg } from './assets/github.svg'
import { ReactComponent as LinkedinSvg } from './assets/linkedin.svg'
import { ReactComponent as MailSvg } from './assets/mail.svg'

const useStyles = createUseStyles(({ palette }) => ({
  socialsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '35px',
    '& > a': {
      minWidth: '35px',
      minHeight: '35px',
      margin: '0 0.5rem',
      '& > svg': {
        color: palette.primaryColor.main,
        width: '29px',
        transition: 'ease-in-out 0.1s',
        '&:hover, &:focus-within': {
          color: palette.primaryColor.lighter,
          width: '32px',
        },
      },
    },
  },
}))

const Socials = ({ className }: SocialsProps) => {
  const classes = useStyles()
  return (
    <div className={classNames(classes.socialsContainer, className)}>
      <a href={SocialLinks.GITHUB} rel="noreferrer" target="_blank">
        <GithubSvg />
      </a>
      <a href={SocialLinks.FACEBOOK} rel="noreferrer" target="_blank">
        <FacebookSvg />
      </a>
      <a href={SocialLinks.LINKEDIN} rel="noreferrer" target="_blank">
        <LinkedinSvg />
      </a>
      <a href={`#${SectionId.CONTACT}`}>
        <MailSvg />
      </a>
    </div>
  )
}

interface SocialsProps {
  className?: string
}

export default Socials
