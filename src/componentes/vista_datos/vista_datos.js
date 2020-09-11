import React, { Fragment, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

import { db } from '../../firebase'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';


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
        {usuario.foto_perfil === "" || usuario.twitter === undefined ? "":
          <img src={usuario.foto_perfil} alt="foto perfil" Style="width: 70px;" required></img>
        }
        <h1>Usuario: {usuario.nombre}</h1>
        <h2>Apellido: {usuario.apellido}</h2>
        <h2>Telefono: {usuario.telefono}</h2>
        <h2>Correo: {usuario.correo}</h2>
        {/* <div>
          <h2 Style='display: contents;'>Su ruta es</h2>
          <a href={`http://tienda.deproinf.com.ve/#/${usuario.nombre_ruta}`}>http://tienda.deproinf.com.ve/#/{usuario.nombre_ruta}</a>
        </div> */}

        <label for="basic-url">Tu Url</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">http://tienda.deproinf.com.ve/#/</span>
            </div>
            <input type="text" id="basic-url" aria-describedby="basic-addon3" value={usuario.nombre_ruta} readOnly/>
          </div>
        
        
        
        <div> Contactame </div>
        <div>
          {usuario.twitter === "" || usuario.twitter === undefined ? '': 
            <a target="_blank" href={usuario.twitter} rel="noopener noreferrer">
              <i class="fab fa-twitter-square" Style="font-size: 35px !important; color:#00acee !important"></i>
            </a>
          }

          {usuario.instagram === "" || usuario.instagram === undefined ? '': 
            
            <a target="_blank" href={usuario.instagram} rel="noopener noreferrer">
              <i class="fab fa-instagram" Style="font-size: 35px !important; color:#3f729b !important"></i>
            </a>
          }
          
          {usuario.facebook === "" || usuario.facebook === undefined ? '': 
            <a target="_blank" href={usuario.facebook} rel="noopener noreferrer">
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

            {/* ENVIAR CORREO */}
            <a href={`mailto:${usuario.correo}?subject= Contacto por Vcard&body=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-envelope" Style="font-size: 35px !important; color:#3b5998 !important"></i>
            </a>
            {/* LLAMAR */}
            <a href={`tel:+${usuario.telefono}`} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-phone-volume" Style="font-size: 35px !important; color:#3b5998 !important"></i>
            </a>
            {/* ESCRIBIR POR WHATSAPP */}
            <a href={`https://api.whatsapp.com/send?phone=${usuario.telefono}&text=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-whatsapp" Style="font-size: 35px !important; color:#3b5998 !important"></i>
            </a>
            {/* ENVIAR */}
            <a href={`sms:+${usuario.telefono}?body=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-sms" Style="font-size: 35px !important; color:#3b5998 !important"></i>
            </a>

        </div>
        {/* <a href={compartir_facebook} target="_blank">
          Share on Facebook
        </a>
        <div></div>
        <a link rel="canonical"
          class="twitter-share-button"
          href="http://twitter.com/share?text=text goes here&url=http://tienda.deproinf.com.ve/9966 &hashtags=hashtag1,hashtag2,hashtag3" target="_blank">
          Share on twiter
        </a> */}

      </Fragment>
    );
  }else{
    return(
      <div></div>
    )
  }
  
}

export default VistaDatos;