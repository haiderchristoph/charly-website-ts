import classNames from 'classnames'
import Page from 'containers/pages/Page'
import { createUseStyles } from 'react-jss'
import { SectionId } from 'utils/constants'
import PersonalImage from './assets/christoph-haider.png'

// This is a helper object before intl is in place
const pageText = {
  heading: 'about',
  descriptionTitle: `Me, myself and I`,
  descriptionHeadline: `I'm a front-end developer for Usersnap in\xa0Linz,\xa0Austria.`,
  descriptionLower: `I'm a design enthusiast with a passion for everything related\xa0to\xa0front-end.`,
  workTogether: `Let's work together!`,
  aboutMe: `I enjoy exploring new technologies and JavaScript frameworks by working on side projects, as I find it's a great way to stay up-to-date with the latest trends. When I'm not working on web development projects you usually find me spending some quality time with my lovely family or grinding some Rocket\xa0League\xa0in\xa0my\xa0downtime.`,
}

const useStyles = createUseStyles(({ palette, typography }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    fontFamily: 'Raleway',
    fontSize: typography.fontSize.headline,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '78rem',
  },
  descriptionHeadline: {
    fontSize: typography.fontSize.large,
    lineHeight: 1.25,
    margin: 0,
    fontWeight: 600,
  },
  descriptionText: {
    fontSize: typography.fontSize.regular,
    width: '100%',
    lineHeight: 1.5,
    margin: 0,
  },
  skillsContainer: {
    width: '100%',
    padding: '1rem',
  },
  descriptionContainer: {
    width: '100%',
    padding: '1rem',
    textAlign: 'center',
  },
  descriptionTitle: {
    fontSize: typography.fontSize.smallHeadline,
    fontWeight: '600',
    margin: '1rem 0',
  },
  personalImage: {
    width: '100%',
    marginBottom: '1rem',
    maxWidth: '12rem',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: `0 0 0 5px ${palette.background}, 0 0 0 10px ${palette.primaryColor.main}`,
  },
  '@media (max-width: 1024px)': {
    contentContainer: {
      flexDirection: 'column',
    },
    skillsContainer: {
      maxWidth: '36rem',
    },
    image: {
      maxWidth: '8rem',
    },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: palette.primaryColor.lighter,
    fontWeight: 600,
    '&:hover': {
      color: palette.primaryColor.main,
    },
  },
  additionalDescription: {
    maxWidth: '44rem',
    margin: '0 auto',
    marginTop: '2rem',
  },
}))

/**
 * Work and Experience
 */
const WorkAndExperiencePage = () => {
  const classes = useStyles()
  return (
    <Page id={SectionId.SKILLS_AND_EXPERIENCE}>
      <div className={classes.container}>
        <h2 className={classes.heading}>{pageText.heading}</h2>
        <div className={classes.contentContainer}>
          <div className={classes.descriptionContainer}>
            <img
              className={classes.personalImage}
              src={PersonalImage}
              alt="head sketch"
            />
            <div className={classes.descriptionTitle}>
              {pageText.descriptionTitle}
            </div>
            <p className={classes.descriptionText}>
              {pageText.descriptionHeadline}
            </p>
            <p className={classes.descriptionText}>
              {pageText.descriptionLower}
            </p>
            <p className={classes.descriptionText}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                role="button"
                className={classes.link}
                onClick={() =>
                  document
                    .querySelector(`#${SectionId.CONTACT}`)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {pageText.workTogether}
              </a>
            </p>
            <p
              className={classNames(
                classes.descriptionText,
                classes.additionalDescription
              )}
            >
              {pageText.aboutMe}
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default WorkAndExperiencePage
