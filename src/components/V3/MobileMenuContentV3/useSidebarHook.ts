import { useTheme } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'


const useSidebarHook = () => {
  const theme = useTheme()
  const pathName = usePathname()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isSelected = useCallback(
    (path: string) => pathName === path,
    [pathName]
  )

  // Define routeType as a union of possible keys
  const routeType: 'mainRoutes' | 'mobileRoutes' = windowWidth > 911 ? 'mainRoutes' : 'mobileRoutes'

  return { theme, routeType, isSelected }
}

export default useSidebarHook
