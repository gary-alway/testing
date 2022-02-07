import { render } from '@testing-library/react'
import React from 'react'
import { testUser } from '../../test/testFactories'
import * as useDataModule from '../hooks/useData'
import { DataContext, DataContextProvider, DataContextType } from './useDataContext'

const useDataMock = jest.spyOn(useDataModule, 'useData')

const user1 = testUser({ name: 'user 1' })
const user2 = testUser({ name: 'user 2' })
const user3 = testUser({ name: 'user 3' })

const users = [user1, user2, user3]

useDataMock.mockReturnValue({
  users,
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

    expect(valueProp.users).toEqual(users)
  })
})
