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
import registro from '../../assets/imagen-registro1.jpg';
import logo from '../../assets/tugogo.png';

import { app } from '../../firebase'

/****** COMPONENTE NAVBAR *************** */
import Navbar from '../navbar/navbar'


function Registrar(){

    let [usuario, SetUsuario] = useState("")
    let [clave, SetClave] = useState("")
    let [confirmarClave, SetConfirmarClave] = useState("")

    const NuevoUsuario = async (event) => {
        event.preventDefault();

        if(clave === confirmarClave){
            try {
                await app
                  .auth()
                  .createUserWithEmailAndPassword(usuario, clave)
                    window.location ="/#/login" 
              } catch (error) {
                alert(error);
              }
        }else{
            alert ("Las contraseñas no son iguales")
        }
    }


    return (
        <section style = {styles.back}>
            <Navbar />
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
                                <CInput style={styles.inputs} type="email" placeholder="email" autoComplete="email" value={usuario} onChange={(event)=>{SetUsuario(event.target.value)}} required/>
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
                            <CButton style={styles.boton} block type="submit">Crear cuenta</CButton>
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
        </section>
    )
}

export default Registrar
