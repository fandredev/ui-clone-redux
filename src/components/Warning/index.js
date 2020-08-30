import React from 'react'
import { Container } from './styled'
import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <Container>
        <span>Black Lives Matter.</span>
        <aside>
          <Link to="#">Support the Equal Justice Initiative</Link>
        </aside>
    </Container>
  )
}
export default Warning
