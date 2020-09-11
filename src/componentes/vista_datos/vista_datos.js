import React, { Fragment, useState, useEffect } from 'react';
import {
  CContainer,
  CRow
} from '@coreui/react'
import { useParams } from 'react-router-dom'

import { db } from '../../firebase'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import{ VcardStile } from './estilosVcard';
import backVcard from '../../assets/Imagen-background1.jpg';
import Navbar from '../navbar/navbar'


function VistaDatos() {
  let { id } = useParams()
  const [nuevoForm, setNuevoForm] = useState("false")
  const [usuario, setUsuario] = useState()
  const [mostrarReturn, setmMostrarReturn] = useState(false)
  // const [compartir_facebook, setCompartir_facebook] = useState("")

  const compartir_facebook = `https://www.facebook.com/sharer/sharer.php?u=example.org`

  useEffect(() => {
    
    console.log(localStorage.getItem('cargo_formulario'))
    if(localStorage.getItem('cargo_formulario')){
      setNuevoForm("true")
      localStorage.clear()

      console.log(id)

      db.collection('Datos_usuarios').where("nombre_ruta", "==",id)
      .onSnapshot(function(querySnapshot) {
          var reporte = {};
          querySnapshot.forEach(function(doc) {
              let datos = doc.data()
              datos.$key = doc.id
              reporte = datos;
          });
          if(reporte.length === [] || reporte.length === 0){
            
          }else {
            console.log(reporte)
            setUsuario(reporte)
            setmMostrarReturn(true)
          }
      })
    }else{
      db.collection('Datos_usuarios').where("nombre_ruta", "==",id)
      .onSnapshot(function(querySnapshot) {
          var reporte = {};
          querySnapshot.forEach(function(doc) {
              let datos = doc.data()
              datos.$key = doc.id
              reporte = datos;
          });
          if(reporte.length === [] || reporte.length === 0){
            
          }else {
            console.log(reporte)
            setUsuario(reporte)
            setmMostrarReturn(true)
          }
      })
    }
  },[])

  if(mostrarReturn){
    return (
      <Fragment>
        <section style = {VcardStile.back}>
         <div style={VcardStile.todo}>
        <Navbar/>
        {/* <div className="col-md-6" style={VcardStile.tarjeta}> */}
            {/* <div className="card tex-center">
              <div className="card-header" style={VcardStile.contenedor2}> */}
              <CRow style={VcardStile.nombre}>
              {usuario.foto_perfil === "" || usuario.twitter === undefined ? "":
              <img src={usuario.foto_perfil} alt="foto perfil" style={VcardStile.imag} required></img>
              }
              </CRow>
              <CRow style={VcardStile.nombre}>
              <h1 class="text-center" style={VcardStile.nombre2}>Usuario: {usuario.nombre}</h1><h1 style={VcardStile.nombre3}>Apellido: {usuario.apellido}</h1>
              </CRow>
              <CRow style={VcardStile.nombre}>
              <h2 style={VcardStile.tlf}>Telefono: {usuario.telefono}</h2>
              </CRow>
              {/* <label for="basic-url">Tu Url</label> */}
              <p></p>
             
              <div  style={VcardStile.nombre} class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">http://tienda.deproinf.com.ve/#/</span>
                </div>
                <input type="text" id="basic-url" aria-describedby="basic-addon3" value={usuario.nombre_ruta} readOnly/>
              </div>
  
                {/* <div>
                <h2 Style='display: contents;'>Su ruta es</h2>
                <a href={`http://tienda.deproinf.com.ve/#/${usuario.nombre_ruta}`}>http://tienda.deproinf.com.ve/#/{usuario.nombre_ruta}</a>
                </div> */}
                <div style={VcardStile.redes}>
                {usuario.twitter === "" || usuario.twitter === undefined ? '': 
                  <a style={VcardStile.Tw} target="_blank" href={usuario.twitter} rel="noopener noreferrer">
                    <i class="fab fa-twitter-square" Style="font-size: 35px !important; color:#00acee !important"></i>
                  </a>
                }

                {usuario.instagram === "" || usuario.instagram === undefined ? '': 
                  
                  <a style={VcardStile.Ins} target="_blank" href={usuario.instagram} rel="noopener noreferrer">
                    <i class="fab fa-instagram" Style="font-size: 35px !important; color:#3f729b !important"></i>
                  </a>
                }

                {usuario.facebook === "" || usuario.facebook === undefined ? '': 
                  <a style={VcardStile.Fb} target="_blank" href={usuario.facebook} rel="noopener noreferrer">
                    <i class="fab fa-facebook" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                  </a>
                }

          {usuario.linkedin === "" || usuario.linkedin === undefined ? '': 
            <a target="_blank" href={usuario.linkedin} rel="noopener noreferrer">
              <i class="fab fa-linkedin" Style="font-size: 35px !important; color:#3b5998 !important"></i>
            </a>
          }
          {usuario.web === "" || usuario.web === undefined ? '': 
            <a target="_blank" href={usuario.web} rel="noopener noreferrer">
              <i class="fas fa-globe-americas" Style="font-size: 35px !important;"></i>
            </a>
          }
        </div>
        <a href={compartir_facebook} target="_blank">
          Share on Facebook
        </a>
        <div></div>
        <a link rel="canonical"
          class="twitter-share-button"
          href="http://twitter.com/share?text=text goes here&url=http://tienda.deproinf.com.ve/9966 &hashtags=hashtag1,hashtag2,hashtag3" target="_blank">
          Share on twiter
        </a>
        <div></div>
        <a href="mailto:prueba@mail.com?subject=Link de mi Card&body=Te invito a visitar mi link de mi Card" target="_blank" rel="noopener noreferrer">Mail</a>
        <div></div>
          <a href="tel:+34678567876" target="_blank" rel="noopener noreferrer">Escribir al telefono</a>
        <div></div>
          <a href="https://api.whatsapp.com/send?phone=584121231212&text=Este%20es%20el%20link%20de%20mi%20vcard" target="_blank" rel="noopener noreferrer">Compartir Vcard</a>
        <div></div>
        <a href="sms:+3412345678?body=Mensaje" target="_blank" rel="noopener noreferrer">Mensajes</a>
        </div>
        </section>
      </Fragment>
    );
  }else{
    return(
      <div></div>
    )
  }
  
}

export default VistaDatos;