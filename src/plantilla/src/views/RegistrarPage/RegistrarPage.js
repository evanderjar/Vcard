import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinksRegistro from "../../components/Header/HeaderLinkRegistro.js"
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/bg.jpg";

import { app, db } from '../../../../firebase'

/***** CONSULTAS BD ***************** */
import { GuardarFicha } from '../../../../consultas/consultas' 


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

  let [usuario, SetUsuario] = useState("")
  let [clave, SetClave] = useState("")
  let [confirmarClave, SetConfirmarClave] = useState("")
  let [contador, Setcontador] = useState(0)

  const NuevoUsuario = async (event) => {
    event.preventDefault();

    if(clave === confirmarClave){

      await db.collection('Datos_usuarios').where('usuario', '==', usuario).get()
      .then(snapshot => {
        if (snapshot.empty) {
          var fecha = new Date()
          fecha = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()
          const rutadinamica = Math.random().toString(36).substring(2)
          Setcontador(1)
          GuardarFicha({
            nombre:"", 
            apellido:"", 
            nombre_ruta:rutadinamica,
            telefono:"",
            correo:usuario, 
            twitter:"",
            cargo:"",
            instagram:"",
            facebook:"",
            linkedin:"",
            skype:"",
            web:"",
            foto_perfil:"",
            tiktok:"",
            pais:"",
            direccion:"",
            ciudad:"",
            codigoPostal:"",
            provincia:"",
            telefonoLocal:"",
            leadPage:"",
            fecha,
            usuario,
            clave,
            enviado:true,
            tiene_usuario:true
          })
          .then(resultado=>{
              console.log("Guardo")
              window.location ="/#/login" 
          })
          
        }else{
          alert('Hay un usuario con las credenciales dadas.');
        }
      
      })
          
        
      
      // try {
        //     await app
        //       .auth()
        //       .createUserWithEmailAndPassword(usuario, clave)
        //         window.location ="/#/login" 
        //   } catch (error) {
        //     alert(error);
        //   }
    }else{
        alert ("Las contraseñas no son iguales")
    }
}
  return (
    <div>
      <Header
        absolute
        color="transparent"
        rightLinks={<HeaderLinksRegistro />}
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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={NuevoUsuario} className={classes.form}>
                  <CardHeader style={{backgroundImage: "linear-gradient(to right, #FFB762 , #FF9459)"}} className={classes.cardHeader}>
                    <h2 style={{fontWeight: "bold", color:"white"}}>Registrar</h2>
                  </CardHeader>
                  <p style={{fontSize: "15px", color: "#9a9c9e"}} className={classes.divider}>Tus datos</p>
                  <CardBody>
                    <CustomInput
                      labelText="Correo..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        onChange:(event)=>{SetUsuario(event.target.value)},
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Clave..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange:(event)=>{SetClave(event.target.value)},
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      labelText="Repetir Clave..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange:(event)=>{SetConfirmarClave(event.target.value)},
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button style={{backgroundColor: "#FFB762", fontSize: "12px"}} type="submit" size="lg">
                      REGISTRARSE
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
