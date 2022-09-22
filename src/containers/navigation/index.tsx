import React from 'react'
import VerticalNavigation from './VerticalNavigation'
import MobileNavigation from './MobileNavigation'
import useMediaQuery from 'utils/hooks/useMediaQuery'

/**
 * Navigation
 *
 * Vertical Desktop Navigation version
 */
const Navigation = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return isDesktop ? <VerticalNavigation /> : <MobileNavigation />
}

export default Navigation
