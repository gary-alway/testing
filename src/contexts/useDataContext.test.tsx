import { render } from '@testing-library/react'
import React from 'react'
import * as useDataModule from '../hooks/useData'
import { DataContext, DataContextProvider, DataContextType } from './useDataContext'

const useDataMock = jest.spyOn(useDataModule, 'useData')

const data = 1234

useDataMock.mockReturnValue({
  data,
})

// eslint-disable-next-line functional/no-let
let valueProp: DataContextType

describe('data context', () => {
  beforeEach(jest.clearAllMocks)

  it('the context should contain data values', () => {
    render(
      <DataContext.Consumer>
        {(value) => {
          valueProp = value
          return <span>Received: {JSON.stringify(value)}</span>
        }}
      </DataContext.Consumer>,
      {
        wrapper: ({ children }: { children: React.ReactNode }): JSX.Element => (
          <DataContextProvider>{children}</DataContextProvider>
        ),
      },
    )

    expect(valueProp.data).toEqual(data)
  })
})
