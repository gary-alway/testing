import styled from '@emotion/styled'
import React from 'react'
import { SomeStyledComponent } from './styledComponentDemo'

const StyledCustomComponent = styled(SomeStyledComponent)`
  margin: 4rem;
`

export const TheComponent: React.FC = () => (
  <>
    This is a styled custom component:
    <StyledCustomComponent>the content here...</StyledCustomComponent>
  </>
)
