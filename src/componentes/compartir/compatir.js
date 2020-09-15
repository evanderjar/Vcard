import React, { useState } from 'react'
import {
    CContainer,
    CRow
  } from '@coreui/react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Cstyle from './styleCompartir';
import Navbar from '../navbar-vcard/navbar'
import style from './styleCompartir'
import { styles } from '../registrar/estilos';


function Compartir(){
    return(
        <div>
            <Navbar/>
            <div style={styles.todo}>
            {/* <CRow style={VcardStile.nombre}>
              <button style={VcardStile.boton}>
              <a style={VcardStile.redes2} href={`tel:+${usuario.telefono}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white', }}>
                <i class="fas fa-phone-volume" Style="font-size: 25px !important; color:#ffffff !important"></i>
                <span Style="font-size: 15px !important; color:#ffffff !important; margin-left:5px;">LLAMAR AL MOVIL</span>
              </a>
              </button>
              </CRow>
              <CRow style={VcardStile.botonesEspacio}>
              <button style={VcardStile.boton2}>
                  <a style={VcardStile.redes2} href={`mailto:${usuario.correo}?subject= Contacto por Vcard&body=Hola, como estas?`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-envelope" Style="font-size: 20px !important; color:#ffffff !important"></i>
                    <span Style="font-size: 15px !important; color:#ffffff !important; margin-left:5px;" >EMAIL</span>
                  </a>
              </button>
              <button style={VcardStile.boton_mensajes}>
                <a style={VcardStile.redes2} href={`https://api.whatsapp.com/send?phone=${usuario.telefono}&text=Hola, como estas?`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp" Style="font-size: 20px !important; color:#ffffff !important"></i>
                  <span Style="font-size: 15px !important; color:#ffffff !important; margin-left:5px;" style={{ textDecoration: 'none' }}>CHAT</span>
                </a>
              </button>
              </CRow> */}

             </div>
        </div>
    )
}
export default Compartir