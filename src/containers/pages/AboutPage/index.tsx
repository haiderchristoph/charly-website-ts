import { createUseStyles } from 'react-jss'
import Page from 'containers/pages/Page'
import { SectionId, ThemeColor, Typography } from 'utils/constants'
// import { ReactComponent as QuoteIcon } from './assets/quote-left-svgrepo-com.svg'
import PersonalImage from './assets/christoph-haider.jpg'
import classNames from 'classnames'

// This is a helper object before intl is in place
const pageText = {
  heading: 'about',
  descriptionTitle: `Me, myself and I`,
  descriptionHeadline: `I'm a front-end developer for Usersnap in\xa0Linz,\xa0Austria.`,
  descriptionLower: `I'm a design enthusiast with a passion for everything related\xa0to\xa0front-end.`,
  workTogether: `Let's work together!`,
  aboutMe: `I enjoy exploring new technologies and JavaScript frameworks by working on side projects, as I find it's a great way to stay up-to-date with the latest trends. When I'm not working on web development projects you usually find me spending some quality time with my lovely family or grinding some Rocket\xa0League\xa0downtime.`,
  // quote: `Although skill bars are intended to showcase impressive proficiency levels, they usually have the opposite effect when viewed by professionals. However, have a look at my fancy skill bars`,
  // quoteMe: ` - me, early 2019`,
}

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    fontFamily: 'Raleway',
    fontSize: Typography.fontSizeHeadline,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '78rem',
  },
  descriptionHeadline: {
    fontSize: Typography.fontSizeText_Big,
    lineHeight: 1.25,
    margin: 0,
    fontWeight: 600,
  },
  descriptionText: {
    fontSize: Typography.fontSizeText,
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
    fontSize: Typography.fontSizeTitle,
    fontWeight: '600',
    margin: '1rem 0',
  },
  personalImage: {
    width: '100%',
    marginBottom: '1rem',
    maxWidth: '12rem',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: `0 0 0 5px ${ThemeColor.backgroundDark}, 0 0 0 10px ${ThemeColor.primaryMain}`,
  },
  // leftQuote: {
  //   width: '7rem',
  //   opacity: '0.1',
  //   position: 'absolute',
  //   top: '-2rem',
  //   left: '2rem',
  // },
  // blockQuote: {
  //   position: 'relative',
  //   textAlign: 'center',
  //   padding: '1rem',
  //   marginLeft: 0,
  //   marginRight: 0,
  // },
  // quoteText: {
  //   fontFamily: 'Indie Flower',
  //   fontSize: '1.5rem',
  //   fontWeight: 600,
  //   lineHeight: 1.25,
  // },
  // quoteMe: {
  //   marginTop: '1rem',
  //   fontWeight: '500',
  //   opacity: '0.8',
  // },
  // rightQuote: {
  //   width: '7rem',
  //   opacity: '0.1',
  //   position: 'absolute',
  //   bottom: '-0rem',
  //   right: '1.75rem',
  //   transform: 'rotate(180deg)',
  // },
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
    color: ThemeColor.primaryLight,
    fontWeight: 600,
    '&:hover': {
      color: ThemeColor.primaryMain,
    },
  },
  additionalDescription: {
    maxWidth: '44rem',
    margin: '0 auto',
    marginTop: '2rem',
    textAalign: 'left',
  },
})

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
          {/* <div className={classes.skillsContainer}> */}
          {/* <blockquote className={classes.blockQuote}>
              <QuoteIcon className={classes.leftQuote} />
              <div className={classes.quoteText}>{pageText.quote}</div>
              <div className={classes.quoteMe}>{pageText.quoteMe}</div>
              <QuoteIcon className={classes.rightQuote} />
            </blockquote>
            {skills.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                score={skill.score}
                color={ThemeColor.primaryMain}
              />
            ))} */}
          {/* <p className={classes.descriptionText}>{pageText.aboutMe}</p> */}
          {/* </div> */}
        </div>
      </div>
    </Page>
  )
}

export default WorkAndExperiencePage
