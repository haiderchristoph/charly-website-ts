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
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return isDesktop ? null : <MobileNavigation />
  // return isDesktop ? <VerticalNavigation /> : <MobileNavigation />
}

export default NavigationHandler
