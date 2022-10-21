import React from 'react'
import { Container, Nav, Navbar,Button } from 'react-bootstrap'
import transparente from '../../img/transparente.png'
import './HAnex.css';

function Cabeca_anexo() {
  return (
    <div className='Center' ><Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand className='Center' href="/"><img
              src={transparente}
              width="50"
              height="40"
              
              
            /></Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/Main">Menu</Nav.Link> 
      <Nav.Link href="/">Encerrar</Nav.Link> 
      <Nav.Link href="/Controlereposicao">Controle/Reposições</Nav.Link> 
      <Nav.Link href="/Quadroreposicao">Quadro/Reposições</Nav.Link>
      <Nav.Link href="/Planoreposicao">Plano/Reposições</Nav.Link>

      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Cabeca_anexo