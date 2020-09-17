import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinksPerfil from "../../components/Header/HeaderLinkPerfil"
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import profile from "../../assets/img/faces/christian.jpg";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/bg.jpg";
import imagen_anonimo from '../../../../assets/user-icono.jpg';
import twitter from '../../../../assets/ICONOS COLOR/ICONO_TWITTER_COLOR.png';
import facebook from '../../../../assets/ICONOS COLOR/ICONO_FACEBOOK_COLOR.png';
import instagram from '../../../../assets/ICONOS COLOR/ICONO_INSTAGRAM_COLOR.png';
import sms from '../../../../assets/ICONOS COLOR/ICONO_SMS_COLOR.png';
import skype from '../../../../assets/ICONOS COLOR/ICONO_SKYPE_COLOR.png';
import web from '../../../../assets/ICONOS COLOR/ICONO_WEB_COLOR.png';
import what from '../../../../assets/ICONOS COLOR/ICONO_WHATSAPP_COLOR.png';
import tiktok from '../../../../assets/ICONOS COLOR/tik-tok.png';
import pagina from '../../../../assets/ICONOS COLOR/pagina.png';

import { db } from '../../../../firebase'
import { Row } from 'react-bootstrap';

const useStyles = makeStyles(styles);

export default function RegistrarPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  let { id } = useParams()
  const [nuevoForm, setNuevoForm] = useState("false")
  const [usuario, setUsuario] = useState()
  const [mostrarReturn, setmMostrarReturn] = useState(false)
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
    <div>
      <Header
        absolute
        color="transparent"
        rightLinks={<HeaderLinksPerfil />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.cont2}>
          <GridContainer styles={{marginTop: "-70px"}} justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                  <CardHeader className={classes.cardH}>
                  <Button style={{marginRight: "330px"}} justIcon round color="white">
                  <i style={{fontSize: "15px"}} className={"fa fa-download"}/>
                </Button>
                  <div>
                    {usuario.foto_perfil === "" || usuario.twitter === undefined ? "":
                    <img style={{width: "120px", height: "120px", borderRadius: "60px"}} src={usuario.foto_perfil} className={navImageClasses} alt="foto perfil" required/>
                    }
                  </div>
                  <div className={classes.name}>
                    <h3 style={{fontSize: "20px",color: "white"}} className={classes.title}>{usuario.nombre}</h3><h3 style={{fontSize: "20px",color: "white"}} className={classes.title}>{usuario.apellido}</h3>
                    <h6 style={{fontSize: "12px", color: "white"}}>{usuario.cargo}</h6>
                    <Button style={{backgroundColor: "#00c2f3"}} type="button" size="md">
                    <a href={`tel:+${usuario.telefono}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white'}}>
                    <i style={{fontSize: "15px", paddingRight: "5px"}} className={"fa fa-phone-volume"}/> Llamar
                    </a>
                    </Button>                    
                    <Button style={{backgroundColor: "#00e3e0"}} type="button" size="md">
                    <a href={`https://api.whatsapp.com/send?phone=${usuario.telefono}&text=Hola, como estas?`} style={{ textDecoration: 'none', color:'white'}} target="_blank" rel="noopener noreferrer">
                    <i style={{fontSize: "15px", paddingRight: "5px"}} className={"fa fa-comments"}/>Chat
                    </a>
                    </Button>                    
                    <Button type="button" style={{backgroundColor: "#00ffd2"}} type="button" size="md">
                    <a href={`mailto:${usuario.correo}?subject= Contacto por Vcard&body=Hola, como estas?`} style={{ textDecoration: 'none', color:'white' }} target="_blank" rel="noopener noreferrer">
                    <i style={{fontSize: "15px", paddingRight: "5px"}} className={"fa fa-envelope"}/>Email
                    </a>
                    </Button>
                  </div>
                  </CardHeader>
                  <CardBody className={classes.cardB}>
                  <div style={{ marginTop: "15px"}} className={classes.name}>
                    <Row style={{justifyContent: "center", marginBottom: "10px"}}>
                    {usuario.twitter === "" || usuario.twitter === undefined ? '': 
                    <a target="_blank" href={usuario.twitter} rel="noopener noreferrer">
                      <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={twitter} alt="tw"></img>
                    </a>
                  }
                  {usuario.facebook === "" || usuario.facebook === undefined ? '': 
                      <a target="_blank" href={usuario.facebook} rel="noopener noreferrer">
                       <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={facebook} alt="tw"></img>
                      </a>
                  }

                  {usuario.linkedin === "" || usuario.linkedin === undefined ? '': 
                    <a target="_blank" href={usuario.linkedin} rel="noopener noreferrer">
                      <i class="fab fa-linkedin" Style="font-size: 35px !important; color:#3b5998 !important"></i>
                    </a>
                  }

                  {usuario.skype === "" || usuario.skype === undefined ? '': 
                    <a target="_blank" href={usuario.skype} rel="noopener noreferrer">
                      <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={skype} alt="tw"></img>
                    </a>
                  }
                  {usuario.web === "" || usuario.web === undefined ? '': 
                    <a  target="_blank" href={usuario.web} rel="noopener noreferrer">
                      <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={web} alt="tw"></img>
                    </a>
                  }
                  {usuario.instagram === "" || usuario.instagram === undefined ? '': 
                    <a  target="_blank" href={usuario.instagram} rel="noopener noreferrer">
                      <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={instagram} alt="tw"></img>
                    </a>
                  }

                  {usuario.tiktok === "" || usuario.tiktok === undefined ? '': 
                    <a  target="_blank" href={usuario.tiktok} rel="noopener noreferrer">
                      <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={tiktok} alt="tw"></img>
                    </a>
                  }

                  {usuario.leadPage === "" || usuario.leadPage === undefined ? '': 
                    <a target="_blank" href={usuario.leadPage} rel="noopener noreferrer">
                      <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={pagina} alt="tw"></img>
                    </a>
                  }
                    <button style={{border: "none", textDecoration: "none", display: "inline-block", background: "none"}}>
                    <a href={`sms:+${usuario.telefono}?body=Hola, como estas?`} target="_blank" rel="noopener noreferrer">
                    <img style={{width: "36px", height: "36px", filter: "grayscale(100%)" }} className={navImageClasses} src={sms} alt="tw"></img>
                    </a>
                    </button>
                    </Row>
                  </div>
                  <h4 className={classes.title}>Telefono: {usuario.telefono}</h4>                  
                  <h4 className={classes.title}>Correo: {usuario.correo}</h4>
                  {
                  usuario.skype === "" || usuario.skype === undefined ? '':
                  <p style={{fontSize: "15px", fontFamily:"muli-light", marginBottom: "-1px"}}>Skype: {usuario.skype}</p>
                  }
                  <hr className={classes.prueba}></hr>
                  </CardBody>
                  <CardFooter className={classes.cardFooter2}>
                  <GridContainer justify="center">
                  <h5 className={classes.title}>Compartir por</h5>
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                    <Button style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)", marginBottom: "10px", marginLeft: "10px", marginRight: "2px"}} type="button" size="md">
                      <a style={{color:"white"}} data-action="share/whatsaap/share" href={`https://api.whatsapp.com/send?text=Te invito a visitar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                        whatsaap
                      </a>
                    </Button>                   
                    <Button style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)", marginBottom: "10px"}} type="button" size="md">
                      <a style={{color:"white"}} href={`https://telegram.me/share/url?url=http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}&text=Te invito a visitar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                        telegram
                      </a>
                    </Button>                   
                     <Button style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)", marginBottom: "10px", marginLeft: "2px"}} type="button" size="md">
                      <a style={{color:"white"}} href={`mailto:?subject=VCard&body=Hola lo invito a revisar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/#/${usuario.nombre_ruta}?`} target="_blank" rel="noopener noreferrer">  
                        correo
                      </a>
                    </Button>                   
                    <Button style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)", marginLeft: "10px", width: "127px" }} type="button" size="md">
                      <a style={{color:"white"}} href={`https://twitter.com/intent/tweet?text=Hola, los invito a revisar la Vcard de ${usuario.nombre} ${usuario.apellido} - http://tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                        twitter
                      </a>
                    </Button>                    
                    <Button style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)", marginLeft: "2px", marginRight: "2px"}} type="button" size="md">
                      <a style={{color:"white"}} href={`https://www.facebook.com/sharer/sharer.php?u=http%3A//tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}`} target="_blank" rel="noopener noreferrer">
                        facebook
                      </a>
                    </Button>                    
                    <Button style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)"}} type="button" size="md">
                      <a style={{color:"white"}} href={`https://www.linkedin.com/shareArticle?mini=true&url=http%3A//tienda.deproinf.com.ve/%23/${usuario.nombre_ruta}&title=Vcard&summary=Visita%20la%20Vcard%20de%20${usuario.nombre}%20${usuario.apellido}&source="`} target="_blank" rel="noopener noreferrer">
                       linkedin
                      </a>
                    </Button>
                    </GridItem>
                    </GridContainer>
                  </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}else{
  return(
    <div></div>
  )
}
}
