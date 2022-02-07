import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 2rem;
  border: 1px solid blue;
  background-color: yellow;
`

type Props = {
  className?: string
}

export const SomeStyledComponent: React.FC<Props> = ({ className }) => (
  <Container className={className}>
    this is styled! (and it can be custom styled because of the className prop)
  </Container>
)
