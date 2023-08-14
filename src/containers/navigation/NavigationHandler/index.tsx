// import VerticalNavigation from '../VerticalNavigation'
import useMediaQuery from 'utils/hooks/useMediaQuery'
import MobileNavigation from '../MobileNavigation'

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
