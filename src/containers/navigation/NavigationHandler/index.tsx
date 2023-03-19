import React from 'react'
// import VerticalNavigation from '../VerticalNavigation'
import MobileNavigation from '../MobileNavigation'
import useMediaQuery from 'utils/hooks/useMediaQuery'

/**
 * Navigation
 *
 * Vertical Desktop Navigation version
 */
const NavigationHandler = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  return isMobile ? <MobileNavigation /> : null
  // return isDesktop ? <VerticalNavigation /> : <MobileNavigation />
}

export default NavigationHandler
