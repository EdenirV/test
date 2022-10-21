import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import transparente from '../../img/transparente.png'

function Cabeca_coorden() {
  return (
  
    <div><Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/"><img
              src={transparente}
              width="50"
              height="40"
              

            /></Navbar.Brand>
      <Nav className="me-auto">
      </Nav>
    </Container>
  </Navbar></div>
  
  )
}

export default Cabeca_coorden