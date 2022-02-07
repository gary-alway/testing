import React from 'react'
import { render, screen } from '@testing-library/react'
import { RoutingDemo } from './routingExample'

const push = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push,
  }),
}))

describe('routing example', () => {
  beforeEach(jest.clearAllMocks)

  it('renders when path not set', () => {
    render(<RoutingDemo />)
    expect(screen.getByText('routing demo')).toBeInTheDocument()
    expect(push).not.toHaveBeenCalled()
  })

  it('push history when path set', () => {
    render(<RoutingDemo path="test" />)
    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('test')
  })
})
