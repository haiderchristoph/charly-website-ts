import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Page from 'containers/pages/Page'
import PersonalImage from './assets/personal-light.png'
import { ReactComponent as TriangleSvg } from './assets/triangle.svg'
import { ReactComponent as CirclesSvg } from './assets/circles.svg'
import { ReactComponent as HandSvg } from './assets/hand-blue.svg'
import { SectionId, ThemeColor, Typography } from 'utils/constants'
import useMediaQuery from 'utils/hooks/useMediaQuery'
import ArrowLink from 'components/controls/ArrowLink'
import Socials from 'components/displays/Socials'

// This is a helper object before intl is in place
const pageText = {
  heading: "Hey, I'm ",
  nickName: 'Charly',
  name: 'Christoph Haider',
  academics: 'BSc. in Software Engineering',
  job: 'Web Developer',
}

const useStyles = createUseStyles({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    color: '#000000',
    transform: 'rotate(-5deg)',
    position: 'relative',
    borderRadius: '2px',
    border: `3px solid ${ThemeColor.primaryMain}`,
    boxShadow: `1px 1px 8px 2px ${ThemeColor.primaryMain}`,
    // keep aspect ratio of card
    width: '85%',
    height: '54vw',
    maxHeight: '34.375rem',
    maxWidth: '22.25rem',
    minWidth: '22.25rem',
    minHeight: '30rem',
    paddingBottom: '4rem',
    '@media (min-width: 769px)': {
      maxWidth: '34.375rem',
      maxHeight: '22.25rem',
      minHeight: '22rem',
      minWidth: '30rem',
      paddingBottom: 0,
    },
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 600,
    margin: 0,
    marginBottom: '0.5rem',
  },
  nickName: {
    margin: 0,
    color: '#27B8B3',
    background: `linear-gradient(to right, ${ThemeColor.primaryLight}, white 50%, ${ThemeColor.primaryMain} 50%)`,
    backgroundClip: 'text',
    boxSizing: 'border-box',
    backgroundSize: '200% 100%',
    backgroundPosition: '100%',
    transition: 'background-position 275ms ease',
    overflow: 'hidden',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    animation: '$nickNameFill 5s ease-in',
    animationIterationCount: 'infinite',
    fontSize: '2rem',
  },
  '@keyframes nickNameFill': {
    '0%': { backgroundPosition: '200% 100%' },
    '5%': { backgroundPosition: '100% 100%' },
    '95%': { backgroundPosition: '100% 100%' },
    '100%': { backgroundPosition: '0 100%' },
  },
  descriptionText: {
    fontSize: Typography.fontSizeText_Big,
    textAlign: 'center',
    margin: '0.25rem',
  },
  descriptionTextName: {
    fontWeight: 600,
  },
  image: {
    width: '10.5rem',
    borderRadius: '50%',
    border: `4px solid ${ThemeColor.primaryMain}`,
    flexShrink: 0,
    '@media (min-width: 769px)': {
      marginRight: '1.5rem',
    },
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (min-width: 769px)': {
      flexDirection: 'row',
    },
  },
  innerContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.5rem',
    '@media (min-width: 769px)': {
      marginTop: '0',
    },
  },
  hand: {
    position: 'absolute',
    top: '-12.25rem',
    left: '14.75rem',
    height: '24rem',
    '@media (min-width: 769px)': {
      top: '-16.75rem',
      left: '24rem',
      height: '33rem',
    },
  },
  descriptionTextJob: {
    color: ThemeColor.primaryMain,
    fontWeight: 600,
  },
})

/**
 * Very first page of the website.
 */
const LandingPage = () => {
  const classes = useStyles()
  const isTabletOrBigger = useMediaQuery('(min-width: 769px)')
  return (
    <Page
      id={SectionId.LANDING_PAGE}
      isVerticalCentered={true}
      isHorizontalCentered={true}
      isFullHeight={true}
      className={classes.page}
    >
      <div className={classes.container}>
        <TriangleSvg
          style={{ position: 'absolute', left: '6px', bottom: '6px' }}
        />
        <TriangleSvg
          style={{
            position: 'absolute',
            right: '6px',
            top: '6px',
            transform: 'rotate(180deg)',
          }}
        />
        <CirclesSvg style={{ position: 'absolute', left: '6px', top: '6px' }} />
        <CirclesSvg
          style={{
            position: 'absolute',
            right: '6px',
            bottom: '6px',
            transform: 'rotate(180deg)',
          }}
        />
        <Socials />
        <HandSvg className={classes.hand} />
        <div className={classes.contentContainer}>
          <img className={classes.image} src={PersonalImage} alt="personal" />
          <div className={classes.innerContainer}>
            <h2 className={classes.heading}>
              {pageText.heading}
              <span className={classes.nickName}>{pageText.nickName}</span>
            </h2>
            <div>
              <p
                className={classNames(
                  classes.descriptionText,
                  classes.descriptionTextName
                )}
              >
                {pageText.name}
              </p>
              <p className={classes.descriptionText}>{pageText.academics}</p>
              <p
                className={classNames(
                  classes.descriptionText,
                  classes.descriptionTextJob
                )}
              >
                {pageText.job}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ArrowLink isTabletOrBigger={isTabletOrBigger} />
    </Page>
  )
}

export default LandingPage
