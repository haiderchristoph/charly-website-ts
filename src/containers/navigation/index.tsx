import useMediaQuery from 'utils/hooks/useMediaQuery'
import MobileNavigation from './MobileNavigation'

/**
 * Navigation
 */
const Navigation = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  return isMobile ? <MobileNavigation /> : null
}

export default Navigation
