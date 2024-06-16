import { useCallback, useEffect, useRef, useState } from 'react'

type UseCartProps = {
  onClose: () => void
}

export function useCart({ onClose }: UseCartProps) {
  const [isClosing, setIsClosing] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  function handleClose() {
    setIsClosing(true)
  }

  const handleAnimationEndCloseCart = useCallback(
    (e: AnimationEvent) => {
      if (e.animationName === 'close-cart') {
        onClose()
        setIsClosing(false)
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.addEventListener(
      'animationend',
      handleAnimationEndCloseCart,
    )

    return () =>
      containerRef.current?.removeEventListener(
        'animationend',
        handleAnimationEndCloseCart,
      )
  }, [handleAnimationEndCloseCart, isClosing, onClose])

  return { handleClose, isClosing, containerRef }
}
