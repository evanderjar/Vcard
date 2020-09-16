import React, { useState } from 'react';
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
/***** CONSULTAS BD ***************** */
import { db } from '../../../../firebase'

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/bg.jpg";
import logo from "../../../../assets/tugogo.png";

const useStyles = makeStyles(styles);

export default function BuscarVcard(props) {
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  let [nombre, SetNombre] = useState("")
  let [noExiste, SetNoExiste] = useState(false)

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const ValidarData = async (event) => {
    event.preventDefault();

    await db.collection('Datos_usuarios').where("nombre_ruta", "==",nombre)
    .onSnapshot(function(querySnapshot) {
        var reporte = [];
        var contador = 0
        querySnapshot.forEach(function(doc) {
            let datos = doc.data()
            datos.$key = doc.id
            reporte.push(datos);
        });
        console.log(reporte)
        if(reporte.length !== 0) {
            console.log("Existe")
            contador++
            window.location ="/#/"+nombre 
            localStorage.setItem('cargo_formulario','false')
        }else {
            alert("el codigo "+ nombre +" no exite")
            SetNoExiste(true)
        }
    })
  }
  return (
    <div>
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
            <GridItem xs={12} sm={12} md={5}>
              {/* <Card className={classes[cardAnimaton]}> */}
                <form className={classes.form} onSubmit={ValidarData}>
                  <CardHeader  className={classes.cardHeader}>
                    <h2 style={{color:"white"}}>Encuentra una Vcard</h2>
                  </CardHeader>
                  <p className={classes.divider}>Introduce el codigo de la Vcard</p>
                  <CardBody>
                    <CustomInput
                      labelText="Codigo..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange:(event)=>{SetNombre(event.target.value)}
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button style={{backgroundColor: "#FFB762"}} type="submit" size="lg">
                      BUSCAR
                    </Button>
                  </CardFooter>
                </form>
              {/* </Card> */}
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
