import api from '../../Service/api';
import {Button, Container, FloatingLabel, Form, Table} from 'react-bootstrap'
import Cabeca_voltar from '../../Component/Header_voltar';
import React, {useEffect, useState} from 'react';
import './quad.css'

function Index() {

  function Print(){
    window.print();
  }

   const [Spares, setSpare] = useState([]);
   useEffect(() =>{
     async function getSpare(){
       const {data} = await api.get('/spare');
       setSpare(data); 
       console.log(data);  
     }
     getSpare();  
   }, []); 

   const [Curso, setCurso] = useState([]);
   function teste(){
    const ADM = Spares.filter((teste) => (
      teste.Course == Curso
    ))
      console.log(ADM);
   }
 

   const [Component, setComponent] = useState([]);
   useEffect(() =>{
    async function getcomponent(){
      const {data} = await api.get('/component');
      setComponent(data); 
      console.log(data);  
    }
    getcomponent();  
  }, []); 

  const [teacher, setTeacher] = useState([]);
  useEffect(() =>{
    async function getteacher(){
      const {data} = await api.get('/teacher');
      setTeacher(data); 
      console.log(data);  
    }
    getteacher();  
  }, []); 

 

  const [Course2, setCourse2] = useState([]);
  useEffect(() =>{
    async function getCourse2(){
      const {data} = await api.get('/course');
      setCourse2(data); 
      console.log(data);  
    }
    getCourse2();  
  }, []); 


  return (
    <div className='fundo'>
      <Cabeca_voltar/>
      {/* {
        teste.map((teste) => (
          <label className='LabelTurma border'>{teste.Course}</label>
        )) 
} */}

  {/* <Form.Control id='select' value={Curso} onChange={e => setCurso(e.target.value)}/> */}
  <Form.Select value={Curso} onChange={e => setCurso(e.target.value)}>
  <option>Selecione o curso</option>
    {
     Course2.map((curso) => (
       <option>{curso.Name_Course}</option>
     ))
      
    }
  </Form.Select>
  <Button onClick={teste}>Buscar</Button>

  <Container>
      <Table className='Cor'>
      <thead className='Head'>
        <tr>
          <th className='Head Titulos'>N??mero Da Reposi????o</th>
          <th className='Head Titulos'>Data Da falta</th>
          <th className='Head Titulos'>Semestre</th>
          <th className='Head Titulos'>Per??odo</th>
          <th className='Head Titulos'>Turma</th>
          <th className='Head Titulos'>Tipo De Reposi????o</th>
          <th className='Head Titulos'>Motivo</th>
          <th className='Head Titulos'>Data De Substitui????o</th>
          <th className='Head Titulos'>Data De Preenchimento</th>
        </tr>
        </thead>
        <tbody>
          {
             Spares.map((Spare) => (
               <tr>
               <td className='Head'>{Spare.idSpare}</td>
               <td className='Head'>{Spare.Date_Spare}</td>
               <td className='Head'>{Spare.Semester}</td>
               <td className='Head'>{Spare.Period}</td>
               <td className='Head'>{Spare.Course}</td>
               <td className='Head'>{Spare.Type_Spare}</td>
               <td className='Head'>{Spare.Reason}</td>
               <td className='Head'>{Spare.Date_Spare}</td>
               <td className='Head'>{Spare.Date_Fill}</td>
           </tr>
             ))
}
        </tbody>
      </Table>

      <Table className='Cor'>
        <thead className='Head'>
          <th className='Head Titulos'>N??mero Da Reposi????o</th>
          <th className='Head Titulos'>Aulas N??o Prestadas</th>
          <th className='Head Titulos'>Componente Curricular</th>
          <th className='Head Titulos'>Hor??rio Da Reposi????o</th>
        </thead>
        <tbody>
          {
            Component.map((component) =>(
              <tr>
              <td className='Head'>{component.idComponent}</td>
              <td className='Head'>{component.Block_}</td>
              <td className='Head'>{component.Name_component}</td>
              <td className='Head'>{component.Hour_Start} ??s {component.Hour_End}</td>
              </tr>
        ))
          }
        </tbody>
      </Table>


      <Table className='Cor'>
      <thead className='Head'>
      <tr>
          <th className='Head Titulos'>N??mero Da Reposi????o</th>
          <th className='Head Titulos'>Professor Ausente</th>
          <th className='Head Titulos'>Professor Da Reposi????o</th>
        </tr>
        </thead>
        <tbody>
          {
                  teacher.map((Teacher) =>(
                <tr>
                    <td className='Head'>{Teacher.idTeachers}</td>
                    <td className='Head'>{Teacher.Name_Teachers}</td>
                    <td className='Head'>{Teacher.Name_Spare}</td>
               </tr>
               ))
}
        </tbody>
      </Table>
    </Container>
        <form>
            <input type="button" className='ButtonTable' value="Imprimir" onClick={Print}/>
        </form>
    </div>
  );
}

export default Index;