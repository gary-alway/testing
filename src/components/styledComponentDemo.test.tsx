import React from 'react'
import { render } from '@testing-library/react'
import { SomeStyledComponent } from './styledComponentDemo'

describe('styled components', () => {
  it('matches the snapshot', () => {
    const { container } = render(<SomeStyledComponent />)
    expect(container).toMatchSnapshot()
  })
})
