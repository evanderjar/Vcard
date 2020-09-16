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
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { Link } from 'react-router-dom'

import styles from "../../assets/jss/material-kit-react/views/loginPage";

import image from "../../assets/img/bg7.jpg";
import logo from "../../../../assets/tugogo.png";

import { app } from '../../../../firebase'

const useStyles = makeStyles(styles);

export default function LoginPage(props) {

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  let [usuario, SetUsuario] = useState("")
  let [clave, SetClave] = useState("")

  const EntrarLogin = async (event) => {
      event.preventDefault();

      console.log(usuario)
      console.log(clave)

      // try {
      //     await app
      //       .auth()
      //       .signInWithEmailAndPassword(usuario, clave);
      //       localStorage.setItem('cargo_formulario','false')
      //       localStorage.setItem('usuario',usuario)

      //       window.location ="/#/formulario" 
      //   } catch (error) {
      //     alert(error);
      //   }


  }
  return (
    <div>
      <image src={logo} alt="logo"/>
      <Header
        absolute
        color="transparent"
        rightLinks={<HeaderLinks />}
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
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={EntrarLogin}>
                  <CardHeader style={{backgroundImage: "linear-gradient(to right, #1CBBC4 , #4FD190)"}} className={classes.cardHeader}>
                    <h2 style={{color:"white"}}>Login</h2>
                  </CardHeader>
                  <p className={classes.divider}>Tus datos</p>
                  <CardBody>
                    <CustomInput
                      labelText="Correo..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
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
                        onChange:(event)=>{SetUsuario(event.target.value)},
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
                    <Button type="submit" style={{backgroundColor: "#4FD190"}} size="lg">
                      Iniciar Sesion
                    </Button>
                    <Link to="/registrar">
                    <Button style={{backgroundColor: "#4FD190"}} size="lg">
                      SIN CUENTA? REGISTRATE AQUI.
                    </Button>
                    </Link>
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
