import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import background from '../../assets/background-login.jpg'
import logo from '../../assets/tugogo.png';
import login from '../../assets/imagen-login.png';

import { style } from './estilos'

import { auth, app } from '../../firebase'


function Login(){

    let [usuario, SetUsuario] = useState("")
    let [clave, SetClave] = useState("")


    const EntrarLogin = async (event) => {
        event.preventDefault();

        try {
            await app
              .auth()
              .signInWithEmailAndPassword(usuario, clave);
                window.location ="/#/formulario" 
                localStorage.setItem('cargo_formulario','false')
          } catch (error) {
            alert(error);
          }


    }



    return (
        <div  className="c-app c-default-layout flex-row align-items-center">
            <img style={style.back} src={background} alt="background"></img>
            <CContainer style={style.contenedor}>
                <CRow className="justify-content-center">
                    <CCol md="11">
                        <CCardGroup style={style.tarjeta}>
                            <CCard className="col-md-8 " style={{ height: '395px' }}>
                                <CCardBody>
                                <CForm onSubmit={EntrarLogin}>
                                <img style={style.logo} src={logo} alt="logo"></img>
                                    {/* <h1 style={style.titulo}>Login</h1> */}
                                    <h4 className="text-muted">Iniciar sesion</h4>
                                    <CInputGroup className="mb-3">
                                    <CInputGroupPrepend>
                                        <CInputGroupText style={style.iconos}>
                                        <i className="fas fa-user"></i>
                                        </CInputGroupText>
                                    </CInputGroupPrepend>
                                    <CInput type="text" placeholder="Usuario" autoComplete="username" style={style.campos} value={usuario} onChange={(event)=>{SetUsuario(event.target.value)}} required/>
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                    <CInputGroupPrepend>
                                        <CInputGroupText style={style.iconos}>
                                        <i className="fas fa-lock"></i>
                                        </CInputGroupText>
                                    </CInputGroupPrepend>
                                    <CInput type="password" placeholder="Contraseña" autoComplete="current-password" style={style.campos} value={clave} onChange={(event)=>{SetClave(event.target.value)}} required/>
                                    </CInputGroup>
                                    <CRow>
                                    <CCol xs="12">
                                        <button className="btn btn-block" type="submit" style={style.boton2}> 
                                            Ingresar
                                        </button>
                                    </CCol>
                                    </CRow>
                                </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard className="text-white d-md-down-none" style={{ width: '44%' }}>
                            <img style={style.login} src={login} alt="login"></img>
                                <CCardBody style={style.tarjeta2} className="text-center">
                                <div>
                                    <h1 style={style.titulo2}>Crear una cuenta</h1>
                                    <p style={style.texto}>Si no tiene una cuenta puede crear una facilmente aqui.</p>
                                    <Link to="/registrar">
                                    <CButton active tabIndex={-1} style={style.boton}>Registrate!!</CButton>
                                    </Link>
                                </div>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login;
