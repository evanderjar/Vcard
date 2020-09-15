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
import Navbar from '../navbar-vcard/navbar'
import imagen_anonimo from '../../assets/user-icono.jpg';
import Icon from '../iconos/iconos'
import twitter from '../../assets/ICONO_TWITTER_GRIS.ico';




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
            if(reporte.foto_perfil ==""){
                reporte.foto_perfil = imagen_anonimo
            }
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
            if(reporte.foto_perfil ==""){
              reporte.foto_perfil = imagen_anonimo
            }
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
        <div className="col-md-5" style={VcardStile.tarjeta}>
            <div className="card tex-center">
              <div className="card-header" style={{paddingBottom: "20px"}}>
              <CRow style={VcardStile.nombre}>
              {usuario.foto_perfil === "" || usuario.twitter === undefined ? "":
              <img src={usuario.foto_perfil} alt="foto perfil" style={VcardStile.imag} required></img>
              }
              </CRow>
              <CRow style={{justifyContent: "center", marginLeft: "1px"}}>
              <p style={VcardStile.nombre2}>{usuario.nombre}</p><p style={VcardStile.nombre3}>{usuario.apellido}</p>
              </CRow>
              <CRow style={VcardStile.nombre}>
              <p style={VcardStile.cargo}>{usuario.cargo}</p>
              </CRow>
              <CRow style={VcardStile.nombre}>
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
              </CRow>
              {/* <CRow style={VcardStile.nombre}>

              <a style={{marginRight: "10px"}} href={`sms:?body=Tarjeta: ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                          sms
                      </a>
                      <div></div>
                      
                      <a style={{marginRight: "10px"}} data-action="share/whatsaap/share" href={`https://api.whatsapp.com/send?text=Te invito a visitar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                        compartir por whatsaap
                      </a>
                      <div></div>

                      <a style={{marginRight: "10px"}} data-action="share/telegram/share" href={`https://telegram.me/share/url?=http%3A%2F%2Ftienda.deproinf.com.ve/&text=Te invito a visitar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                        compartir por telegram
                      </a>
                      <div></div>

                      <a style={{marginRight: "10px"}} href={`mailto:?subject=VCard&body=Hola lo invito a revisar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/#/${usuario.nombre_ruta}?`} target="_blank" rel="noopener noreferrer">
                        compartir por mail
                      </a>
                    <div></div>

                    <a style={{marginRight: "10px"}} href={`https://twitter.com/intent/tweet?text=Hola, los invito a revisar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                      compartir en twitter
                    </a>

                    <a style={{marginRight: "10px"}} href={`https://www.facebook.com/sharer/sharer.php?u=http%3A//tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                      compartir en facebook
                    </a>

                    <a style={{marginRight: "10px"}} href={`https://www.linkedin.com/shareArticle?mini=true&url=http%3A//tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}&title=Vcard&summary=Visita%20la%20Vcard%20de%20${usuario.nombre}%20${usuario.apellido}&source="`} target="_blank" rel="noopener noreferrer">
                      compartir en linkedin
                    </a>
              </CRow> */}
                {/* <div>
                <h2 Style='display: contents;'>Su ruta es</h2>
                <a href={`http://tienda.deproinf.com.ve/#/${usuario.nombre_ruta}`}>http://tienda.deproinf.com.ve/#/{usuario.nombre_ruta}</a>
                </div> */}
                <div style={VcardStile.redes}>
                <div style={VcardStile.espacio}>
                  
                <CRow style={VcardStile.redesMargen}>
                  {usuario.twitter === "" || usuario.twitter === undefined ? '': 
                    <a style={VcardStile.redes2} target="_blank" href={usuario.twitter} rel="noopener noreferrer">
                      <i src={twitter} alt="twitter"></i>
                      {/* <i class="fab fa-twitter-square" Style="font-size: 35px !important; color:#00acee !important"></i> */}
                    </a>
                  }

                  {usuario.facebook === "" || usuario.facebook === undefined ? '': 
                      <a style={VcardStile.redes2} target="_blank" href={usuario.facebook} rel="noopener noreferrer">
                         <i class="fab fa-facebook" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                      </a>
                  }

                  {usuario.linkedin === "" || usuario.linkedin === undefined ? '': 
                    <a style={VcardStile.redes2} target="_blank" href={usuario.linkedin} rel="noopener noreferrer">
                      <i class="fab fa-linkedin" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a>
                  }

                  {usuario.skype === "" || usuario.skype === undefined ? '': 
                    <a style={VcardStile.redes2} target="_blank" href={usuario.skype} rel="noopener noreferrer">
                      <i class="fab fa-skype" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a>
                  }
                  {usuario.web === "" || usuario.web === undefined ? '': 
                    <a style={VcardStile.redes2} target="_blank" href={usuario.web} rel="noopener noreferrer">
                      <i class="fas fa-globe-americas" Style="font-size: 35px !important;"></i>
                    </a>
                  }

                    {/* ENVIAR CORREO */}
                    {/* <a style={VcardStile.redes2} href={`mailto:${usuario.correo}?subject= Contacto por Vcard&body=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
                      <i class="fas fa-envelope" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a> */}
                    {/* LLAMAR */}
                    {/* <a style={VcardStile.redes2} href={`tel:+${usuario.telefono}`} target="_blank" rel="noopener noreferrer">
                      <i class="fas fa-phone-volume" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a> */}
                    {/* ESCRIBIR POR WHATSAPP */}
                    {/* <a style={VcardStile.redes2} href={`https://api.whatsapp.com/send?phone=${usuario.telefono}&text=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-whatsapp" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a> */}
                    {/* ENVIAR */}
                    <a style={VcardStile.redes2} href={`sms:+${usuario.telefono}?body=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
                      <i class="fas fa-sms" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a>
                    </CRow>
                </div>
                  <div style={VcardStile.contacto}> Contactame </div>

                      <CRow style={VcardStile.nombre}>
                        <h4>Telefono: {usuario.telefono}</h4>
                      </CRow>
                      <CRow style={VcardStile.nombre}>
                        <h4>Correo: {usuario.correo}</h4>
                      </CRow>
                {/* <label for="basic-url">Tu Url</label>
              <div  style={VcardStile.nombre} class="input-group mb-3">
                <div class="input-group-prepend">
                  <span style={VcardStile.url} class="input-group-text" id="basic-addon3">http://tienda.deproinf.com.ve/#/</span>
                </div>
                <input style={VcardStile.u} class="form-control" type="text" id="basic-url" aria-describedby="basic-addon3" value={usuario.nombre_ruta} readOnly/>
              </div> */}
        {/* <a href={compartir_facebook} target="_blank">
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
        </a> */}
                  </div>
                </div>
              </div>
            </div>
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