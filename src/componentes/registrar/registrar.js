import React, { useState } from 'react'
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

// import { db, storage, auth } from '../../firebase'


function Registrar(){

    let [usuario, SetUsuario] = useState("")
    let [clave, SetClave] = useState("")
    let [confirmarClave, SetConfirmarClave] = useState("")

    const NuevoUsuario = (event) => {
        
        
        event.preventDefault();

        if(clave === confirmarClave){
            alert("son iguales")
        }else{
            alert ("no son iguales")
        }

        // console.log("aqui")
        // window.location ="#/login"
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
                        <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="email" placeholder="Usuario" autoComplete="email" value={usuario} onChange={(event)=>{SetUsuario(event.target.value)}} required/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-lock-locked" /> */}
                            <i className="fas fa-lock"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="password" placeholder="Clave" autoComplete="new-password" value={clave} onChange={(event)=>{SetClave(event.target.value)}} required/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                        <CInputGroupText>
                            {/* <CIcon name="cil-lock-locked" /> */}
                            <i className="fas fa-lock"></i>
                        </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput style={styles.inputs} type="password" placeholder="Repetir clave" autoComplete="new-password" value={confirmarClave} onChange={(event)=>{SetConfirmarClave(event.target.value)}} required/>
                    </CInputGroup>
                    <CButton style={styles.boton} block type="submit">Create Account</CButton>
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
