/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button.js";
import logo from "../../../../assets/tugogo.png";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

import { useParams } from 'react-router-dom'

import { db } from '../../../../firebase'


const useStyles = makeStyles(styles);

export default function HeaderLinksPerfil(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  let { id } = useParams()

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

  const Redireccionar = async(event) => {
    event.preventDefault();
    console.log(id)

    await db.collection('Datos_usuarios').where('nombre_ruta', '==', id).get()
    .then(snapshot => {
      var reporte = []
      snapshot.forEach(doc => {
        let datos = doc.data()
        datos.$key = doc.id
        reporte.push(datos);
      });
      console.log(reporte)
      if(reporte[0].tiene_usuario){
        window.location ="/#/login"
      }else{
        localStorage.setItem('cargo_formulario','false')
        localStorage.setItem('usuario',reporte[0].correo)
        localStorage.setItem('ruta',reporte[0].nombre_ruta)
        window.location ="/#/formulario"
      }
    })
  }



  return (
    <List className={classes.list}>
      <Header
            color="transparent"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                <img style={{width: "90px", height: "112px", marginRight: "765px"}} src={logo} alt="..." className={navImageClasses} />
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link style={{color:"#1CBBC4"}} to="/login">
                  <Button
                    type="submit"
                    onClick={Redireccionar}
                    color="transparent"
                    className={
                      classes.navLink
                    }
                  >{" "}
                   <i style={{fontSize: "13px", paddingRight: "5px"}} className={"fa fa-user"}/> Entrar a Vcard
                  </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link style={{color:"#1CBBC4"}} to="/registrar">
                  <Button style={{marginRight: "60px"}}
                    color="transparent"
                    className={
                      classes.navLink
                    }
                  >{" "}
                    <i style={{fontSize: "13px", paddingRight: "5px"}} className={"fa fa-users"}/>Registrarse
                  </Button>
                  </Link>
                </ListItem>
              </List>
            }
          />
    </List>
  );
}
