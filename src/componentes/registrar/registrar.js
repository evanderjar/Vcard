import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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

function Registrar(){


    const NuevoUsuario = (event) => {
        event.preventDefault();
        console.log("aqui")
        window.location ="#/login"
    }


    return (
        <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
            <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
                <CCard className="mx-4">
                <CCardBody className="p-4">
                    <CForm onSubmit={NuevoUsuario}> 
                    <h1>Nuevo usuario</h1>
                    <p className="text-muted">Crea tu cuenta</p>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-user" /> */}
                            <i className="far fa-user"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-lock-locked" /> */}
                            <i className="fas fa-lock"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="new-password" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-lock-locked" /> */}
                            <i className="fas fa-lock"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </CInputGroup>
                    <CButton color="success" block type="submit">Create Account</CButton>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>
            </CRow>
        </CContainer>
        </div>
    )
}

export default Registrar
