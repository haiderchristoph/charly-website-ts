import { createUseStyles } from 'react-jss'
import Page from 'containers/pages/Page'
import { SectionId } from 'utils/constants'
import TechStackDisplay from 'components/displays/TechStackDisplay'

// This is a helper object before intl is in place
const pageText = {
  heading: 'tech stack',
  subHeading: 'Technologies and tools I love to use',
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
  subHeading: {
    fontSize: typography.fontSize.medium,
    color: palette.primaryColor.main,
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '78rem',
    marginTop: '3rem',
  },
}))

/**
 * Tech Stack
 */
const TechStackPage = () => {
  const classes = useStyles()
  return (
    <Page id={SectionId.TECH_STACK}>
      <div className={classes.container}>
        <h2 className={classes.heading}>{pageText.heading}</h2>
        <div className={classes.subHeading}>{pageText.subHeading}</div>
        <div className={classes.contentContainer}>
          <TechStackDisplay />
        </div>
      </div>
    </Page>
  )
}

export default TechStackPage
