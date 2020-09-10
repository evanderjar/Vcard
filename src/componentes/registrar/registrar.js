import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCardGroup,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import { styles } from './estilos'
import registro from '../../assets/imagen-registro.png';
import logo from '../../assets/tugogo.png';

function Registrar(){


    const NuevoUsuario = (event) => {
        event.preventDefault();
        console.log("aqui")
        window.location ="#/login"
    }


    return (
        <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer style={styles.tarjeta}>
            <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="11">
            <CCardGroup>
                <CCard>
                <CCardBody className="p-4">
                    <CForm onSubmit={NuevoUsuario}> 
                    <img style={styles.logo} src={logo} alt="logo"></img>
                    <p></p>
                    {/* <h1>Nuevo usuario</h1> */}
                    <p className="text-muted">Crea tu cuenta</p>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-user" /> */}
                            <i className="far fa-user"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="text" placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-lock-locked" /> */}
                            <i className="fas fa-lock"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="password" placeholder="Password" autoComplete="new-password" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-lock-locked" /> */}
                            <i className="fas fa-lock"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </CInputGroup>
                    <CButton style={styles.boton} color="success" block type="submit">Create Account</CButton>
                    </CForm>
                </CCardBody>
                </CCard>
                <CCard className="text-white d-md-down-none">
                            <img style={styles.img} src={registro} alt="login"></img>
                                <CCardBody  className="text-center">
                                </CCardBody>
                </CCard>
                </CCardGroup>
            </CCol>
            </CRow>
        </CContainer>
        </div>
    )
}

export default Registrar
