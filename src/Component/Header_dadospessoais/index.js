import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import transparente from '../../img/transparente.png'


function dadosPessoais() {
  return (
    <div ><Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/"><img
              src={transparente}
              width="40"
              height="30"
              
              
            /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Menu</Nav.Link> 
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default dadosPessoais