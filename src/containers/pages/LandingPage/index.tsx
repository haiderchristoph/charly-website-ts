import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Page from 'containers/pages/Page'
import PersonalImage from './assets/christoph-haider.jpg'
import { ReactComponent as TriangleSvg } from './assets/triangle.svg'
import { ReactComponent as CirclesSvg } from './assets/circles.svg'
import { SectionId, ThemeColor } from 'utils/constants'
import useMediaQuery from 'utils/hooks/useMediaQuery'
import ArrowLink from 'components/controls/ArrowLink'

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
    '@media (min-width: 769px)': {
      position: 'relative',
      width: '34.375rem',
      height: '22.25rem',
      border: '3px solid #27B8B3',
      boxShadow: '1px 1px 20px 4px #27B8B3',
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
    marginTop: '1.5rem',
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
    fontSize: '1.25rem',
    textAlign: 'center',
    margin: '0.25rem',
  },
  descriptionHighlight: {
    fontWeight: 600,
  },
  image: {
    width: '8rem',
    borderRadius: '50%',
    boxShadow: `0 0 0 5px ${ThemeColor.backgroundDark}, 0 0 0 10px ${ThemeColor.primaryMain}`,
  },
})

/**
 * Very first page of the website.
 */
const LandingPage = () => {
  const classes = useStyles()
  const isTabletOrHigher = useMediaQuery('(min-width: 769px)')
  return (
    <Page
      id={SectionId.LANDING_PAGE}
      isVerticalCentered={true}
      isHorizontalCentered={true}
      isFullHeight={true}
      className={classes.page}
    >
      <div className={classes.container}>
        {isTabletOrHigher && (
          <>
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
            <CirclesSvg
              style={{ position: 'absolute', left: '6px', top: '6px' }}
            />
            <CirclesSvg
              style={{
                position: 'absolute',
                right: '6px',
                bottom: '6px',
                transform: 'rotate(180deg)',
              }}
            />
          </>
        )}
        <img className={classes.image} src={PersonalImage} alt="personal" />
        <h2 className={classes.heading}>
          {pageText.heading}
          <span className={classes.nickName}>{pageText.nickName}</span>
        </h2>
        <div>
          <p
            className={classNames(
              classes.descriptionText,
              classes.descriptionHighlight
            )}
          >
            {pageText.name}
          </p>
          <p className={classes.descriptionText}>{pageText.academics}</p>
          <p className={classes.descriptionText}>{pageText.job}</p>
        </div>
      </div>
      <ArrowLink />
    </Page>
  )
}

export default LandingPage
