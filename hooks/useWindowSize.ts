import { useState, useEffect } from 'react'

function useWindowSize() {
  const [size, setSize] = useState<null | number>(null)
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return size
}

export default useWindowSize
