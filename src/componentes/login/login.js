import React from 'react'
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

import { style } from './estilos'

function Login(){

    const EntrarLogin = (event) => {
        event.preventDefault();
        window.location ="/#/formulario" 
        localStorage.setItem('cargo_formulario','false')
    }



    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer style={style.contenedor}>
                <CRow className="justify-content-center">
                    <CCol md="8">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                <CForm onSubmit={EntrarLogin}>
                                    <h1 style={style.titulo}>Login</h1>
                                    <h4 className="text-muted">Iniciar sesion</h4>
                                    <CInputGroup className="mb-3">
                                    <CInputGroupPrepend>
                                        <CInputGroupText style={style.iconos}>
                                        <i className="fas fa-user"></i>
                                        </CInputGroupText>
                                    </CInputGroupPrepend>
                                    <CInput type="text" placeholder="Usuario" autoComplete="username" style={style.campos}/>
                                    </CInputGroup>
                                    <CInputGroup className="mb-4">
                                    <CInputGroupPrepend>
                                        <CInputGroupText style={style.iconos}>
                                        <i className="fas fa-lock"></i>
                                        </CInputGroupText>
                                    </CInputGroupPrepend>
                                    <CInput type="password" placeholder="Contraseña" autoComplete="current-password" style={style.campos}/>
                                    </CInputGroup>
                                    <CRow>
                                    <CCol xs="6">
                                        <button className="btn btn-primary" type="submit" style={style.boton}> 
                                            Ingresar
                                        </button>
                                    </CCol>
                                    </CRow>
                                </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                                <CCardBody className="text-center">
                                <div>
                                    <h2>Crear cuenta</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                    <Link to="/registrar">
                                    <CButton color="primary" active tabIndex={-1} style={style.boton}>Registrate!!</CButton>
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
