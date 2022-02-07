import { useCallback, useEffect, useRef } from 'react'

type UseTimeout = {
  reset: () => void
  clear: () => void
}

export const useTimeout = (callback: () => void, delay: number): UseTimeout => {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef<any>()

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
