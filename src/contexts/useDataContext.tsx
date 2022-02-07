import React, { createContext, useContext } from 'react'
import { useData } from '../hooks/useData'

export type DataContextType = {
  users: User[]
}

export const DataContext = createContext<DataContextType>({
  users: [],
})

type DataProviderProps = {
  children: React.ReactNode
}

export const DataContextProvider = ({ children }: DataProviderProps): JSX.Element => {
  const { users } = useData()

  return (
    <DataContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = (): DataContextType => useContext(DataContext)
