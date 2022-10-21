import React, { useState }  from "react"; // Importar o React
import { Button } from "react-bootstrap";
import  Modal  from "react-bootstrap/Modal";
import Branco from '../../img/branco.png';
import api from '../../Service/api';
import './Cadastro.css';
import { ErrorMessage, Formik } from "formik";


function Main(){ // Criar função da página Main

    const [Email_User, setEmail] = useState('');
    const [Name_User, setUser] = useState('');
    const [User_Password, setPassword] = useState('');

    async function CreateUser(){
        try{
            const data ={
                Email_User, Name_User, User_Password
            }
        await api.post('/user', data)
            alert("Cadastro realizado com sucesso")
            
        }catch(err){
            alert(`Houve um erro: ${err}`)
        }
    }

    return(
        
        <center>
        <div className='Container1'> {/*div principal do conteúdo*/}
            <div className="Estilo-Login">
                <Formik>
            <form> {/*Tag de Formulário*/}
                <Modal.Header> {/*Modal da imagem*/}
                    <span className="Titulo-Form">
                        <img src={Branco} alt='logo' className="Img"/> {/*Importação da Logo do sistema */}
                    </span>
                </Modal.Header>

                <Modal.Body>
                <div className="DivOptions"> 
                        <input className="input" onChange={e => setUser(e.target.value)} 
                        value={Name_User}/>
                        <span className="focus-input"  data-placeholder="Nome De Usuário"></span>
                </div>


                    <div className="DivOptions"> 
                        <input className="input" onChange={e => setEmail(e.target.value)} 
                        value={Email_User}/>
                        <span className="focus-input"  data-placeholder="Email"></span>
                    </div>

                    <div className="DivOptions">
                        <input className="input" onChange={e => setPassword(e.target.value)}  
                         value={User_Password} />
                        <span className="focus-input"  data-placeholder="Senha"></span>
                    </div>

                </Modal.Body>

                <section className="footer">
                    <div className="DivButton">
                        <Button className="Button" href="/Main" onClick={CreateUser}>CADASTRAR</Button>
                    </div>

                    <div className="DivTexto">
                        <span className="Pconta">Já possui conta?</span>
                        <a className="Entrar" href="/">Entrar</a>
                    </div>
                </section>
            </form>
            </Formik>
            </div>
        </div>
        </center>
    )
}


export default Main; // Exportar a página Main