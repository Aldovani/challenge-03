import { useScrollPosition } from '@/hooks/use-scroll-position'
import { useCallback, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function useHeader() {
  const headerRef = useRef<HTMLHeadElement | null>(null)
  const { pathname } = useLocation()

  const position = useScrollPosition()
  const changeHeaderSizeOnScroll = useCallback(() => {
    if (!headerRef.current) return

    if (position > 50) {
      headerRef.current.classList.add('py-4')
      headerRef.current.classList.remove('py-8')
      return
    }
    headerRef.current.classList.remove('py-4')
    headerRef.current.classList.add('py-8')
  }, [position])

  useEffect(() => {
    if (!headerRef) return

    window.addEventListener('scroll', changeHeaderSizeOnScroll)

    return () => window.removeEventListener('scroll', changeHeaderSizeOnScroll)
  }, [changeHeaderSizeOnScroll])

  useEffect(() => {
    if (headerRef.current && position === 0) {
      headerRef.current.classList.remove('py-4')
      headerRef.current.classList.add('py-8')
    }
  }, [pathname, position])

  return {
    headerRef,
  }
}
