import { useCallback, useEffect, useRef, useState } from 'react'

export function useCart() {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMountedRef = useRef(false)

  const handleCloseCart = useCallback(() => {
    setIsOpen(false)
  }, [])

  function handleClose() {
    setIsClosing(true)
  }
  function handleOpenCart() {
    setIsOpening(true)
  }

  const handleAnimationEndCart = useCallback(
    (e: AnimationEvent) => {
      if (e.animationName === 'open-cart') {
        setIsOpening(false)
        setIsOpen(true)
      }

      if (e.animationName === 'close-cart') {
        handleCloseCart()
        setIsClosing(false)
      }
    },
    [handleCloseCart],
  )

  useEffect(() => {
    if (!isMountedRef) return
    if (!containerRef.current) return

    containerRef.current.addEventListener(
      'animationend',
      handleAnimationEndCart,
    )

    return () =>
      containerRef.current?.removeEventListener(
        'animationend',
        handleAnimationEndCart,
      )
  }, [handleAnimationEndCart, containerRef])

  return {
    handleClose,
    isClosing,
    containerRef,
    handleOpenCart,
    isOpen,
    isOpening,
  }
}
