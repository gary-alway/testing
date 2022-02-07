import { useEffect, useState } from 'react'

type UseData = {
  data: number | undefined
}

export const useData = (): UseData => {
  const [data, setData] = useState<number | undefined>(undefined)

  useEffect(() => {
    setData(Math.trunc(Math.random() * 20) + 1)
  }, [])

  return {
    data,
  }
}
