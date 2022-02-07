import React from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  path?: string
}

export const RoutingDemo: React.FC<Props> = ({ path }) => {
  const history = useHistory()

  if (path) {
    history.push(path)
  }

  return <>routing demo</>
}
