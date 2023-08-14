import useMediaQuery from 'utils/hooks/useMediaQuery'
import MobileNavigation from './MobileNavigation'
import VerticalNavigation from './VerticalNavigation'

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
