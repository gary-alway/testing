import React from 'react'
import { render } from '@testing-library/react'
import { Component1 } from './component1'

describe('component', () => {
  it('renders the component', () => {
    render(<Component1 />)
  })
})
