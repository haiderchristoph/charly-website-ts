import React from 'react'
import { createUseStyles } from 'react-jss'
import Page from 'containers/pages/Page'
import SkillBar from 'components/displays/SkillBar'
import { SectionId, ThemeColor, Typography } from 'utils/constants'
import { skills } from 'utils/skills'
import { ReactComponent as QuoteIcon } from './assets/quote-left-svgrepo-com.svg'
import PersonalImage from './assets/christoph-haider.jpg'

// This is a helper object before intl is in place
const pageText = {
  heading: 'about',
  descriptionTitle: `Me, myself and I`,
  descriptionHeadline: `I'm a Front-End Developer for Usersnap in Linz, Austria.`,
  descriptionLower: `I'm a design enthusiast with a passion for everything related to frontend.`,
  workTogether: `Let's work together!`,
  quote: `Whoever claims to have mastered these skills 100% may be lying about other things in their life too.`,
  quoteMe: ` - me, early 2019`,
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
    maxWidth: '12rem',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: `0 0 0 5px ${ThemeColor.backgroundDark}, 0 0 0 10px ${ThemeColor.primaryMain}`,
  },
  leftQuote: {
    width: '7rem',
    opacity: '0.1',
    position: 'absolute',
    top: '-2rem',
    left: '2rem',
  },
  blockQuote: {
    position: 'relative',
    textAlign: 'center',
    padding: '1rem',
  },
  quoteText: {
    fontFamily: 'Caveat',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  quoteMe: {
    marginTop: '1rem',
    fontWeight: '500',
    opacity: '0.8',
  },
  rightQuote: {
    width: '7rem',
    opacity: '0.1',
    position: 'absolute',
    bottom: '-0rem',
    right: '1.75rem',
    transform: 'rotate(180deg)',
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
    color: ThemeColor.primaryLight,
    fontWeight: 600,
    '&:hover': {
      color: ThemeColor.primaryMain,
    },
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
              <a className={classes.link} href={`#${SectionId.CONTACT}`}>
                {pageText.workTogether}
              </a>
            </p>
          </div>
          <div className={classes.skillsContainer}>
            <blockquote className={classes.blockQuote}>
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
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default WorkAndExperiencePage
