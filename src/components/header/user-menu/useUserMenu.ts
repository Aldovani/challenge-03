import { useCallback, useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../hooks/use-auth'

export function useUserMenu() {
  const { user, singOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    setIsMenuOpen(false)
  }, [])
  const handleToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const onClickOutsideDropDownMenu = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return
      const target = e.target as HTMLElement

      if (!containerRef.current.contains(target)) handleClose()
    },
    [handleClose],
  )

  useEffect(() => {
    if (!containerRef) return

    document.addEventListener('click', onClickOutsideDropDownMenu)

    return () =>
      document.removeEventListener('click', onClickOutsideDropDownMenu)
  }, [onClickOutsideDropDownMenu])

  return {
    user,
    isMenuOpen,
    setIsMenuOpen,
    containerRef,
    handleToggle,
    singOut,
  }
}
