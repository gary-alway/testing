import { useEffect, useState } from 'react'
import { userService } from '../services/userService'

type UseData = {
  users: User[]
}

export const useData = (): UseData => {
  const service = userService()
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    service.getUsers().then(setData)
  }, [])

  return {
    users: data,
  }
}
