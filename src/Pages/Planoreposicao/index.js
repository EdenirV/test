import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Container, FloatingLabel} from 'react-bootstrap'
import Cabeca_voltar from '../../Component/Header_voltar';
import './plan.css'


function index() {
  return (
  <div className='fundo3'>
    <Cabeca_voltar />
    <Form>
      <Container className='formulario3' style={{ width: '75rem' }}>
       <center>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label className='label3'>Plano de reposição de aulas</Form.Label>
            <Form.Control/>
            </Form.Group>
            
            <Form.Group as={Col}>
                <Form.Label className='label3'>Data da falta do docente</Form.Label>
                <Form.Control/>
                </Form.Group>
               
                <Form.Group as={Col}>
                      <Form.Label className='label3'>Horário da aula</Form.Label>
                      <Form.Control/>
                      </Form.Group>
                      
                    <Form.Group as={Col}>
                      <Form.Label className='label3'>Número de aulas</Form.Label>
                      <Form.Control/>
                      </Form.Group>
                      </Row>

                <Row className="mb-3">
                      <Form.Group as={Col}>
                      <Form.Label className='label3'>Data de reposição</Form.Label>
                      <Form.Control/>
                      </Form.Group>
                      
                    <Form.Group as={Col}>
                      <Form.Label className='label3'>Horário da reposição</Form.Label>
                      <Form.Control/>
                      </Form.Group>
                      
                
                  <Form.Group as={Col}>
                    <Form.Label  className='label3'>Tipo de reposição</Form.Label>
                    <Form.Control/>
                    </Form.Group>

              <Form.Group as={Col}>
                  <Form.Label className='label3'>Semestre</Form.Label>
                  <Form.Control/>
                  </Form.Group>
              </Row>
              
              <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label className='label3'>Professor que não ministrou a aula</Form.Label>
                <Form.Control/>
                </Form.Group>

                <Form.Group as={Col}>
                      <Form.Label className='label3'>Professor da reposição</Form.Label>
                      <Form.Control/>
                      </Form.Group>
                
                <Form.Group as={Col}>
                  <Form.Label className='label3'>Componente curricular</Form.Label>
                  <Form.Control/>
                  </Form.Group>
                  

                    <Form.Group as={Col}>
                      <Form.Label className='label3'>Atividades desenvolvidas:</Form.Label>
                      <Form.Control as="textarea" rows={6} />
                      </Form.Group>
                      </Row>
                      </center>
                      <center>
                      <Button className="for1" variant="primary" type="submit">
                        Enviar
                      </Button>
                      </center>
                      <Row className="mb-3">
            <Col sm={{ span: 1, offset: 11 }}>
            <input  className="mb-1" type="button" value="Imprimir" onClick="window.print()" />
   </Col>
   </Row>          
    </Container>
     </Form>
          
            </div>
  );
}

export default index;