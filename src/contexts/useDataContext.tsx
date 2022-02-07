import React, { createContext, useContext } from 'react'
import { useData } from '../hooks/useData'

export type DataContextType = {
  data: number | undefined
}

export const DataContext = createContext<DataContextType>({
  data: undefined,
})

type DataProviderProps = {
  children: React.ReactNode
}

export const DataContextProvider = ({ children }: DataProviderProps): JSX.Element => {
  const { data } = useData()

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = (): DataContextType => useContext(DataContext)
