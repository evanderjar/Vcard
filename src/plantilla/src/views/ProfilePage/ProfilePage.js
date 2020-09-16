import React from "react";
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
import profile from "../../assets/img/faces/christian.jpg";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/bg2.jpg";
import logo from "../../../../assets/tugogo.png";

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
        <div className={classes.cont2}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardH}>
                  <div>
                    <img style={{width: "112px", height: "112px", borderRadius: "60px"}} src={profile} alt="..." className={navImageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button style={{backgroundColor: "#FFB762"}} type="button" size="md">
                      Llamar
                    </Button>                    
                    <Button style={{backgroundColor: "#FFB762"}} type="button" size="md">
                      Chat
                    </Button>                    
                    <Button style={{backgroundColor: "#FFB762"}} type="button" size="md">
                      Email
                    </Button>
                  </div>
                  </CardHeader>
                  <CardBody className={classes.cardB}>
                  <div style={{ marginTop: "15px"}} className={classes.name}>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                  <h4 className={classes.title}>Telefono: 0412 12345678</h4>                  
                  <h4 className={classes.title}>Correo: Correo@correo.com</h4>
                  <hr></hr>
                  </CardBody>
                  <CardFooter className={classes.cardFooter2}>
                  <GridContainer justify="center">
                  <h5 className={classes.title}>Compartir por</h5>
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <Button style={{backgroundColor: "#FFB762", marginBottom: "10px"}} type="button" size="md">
                      Email
                    </Button>                   
                     <Button style={{backgroundColor: "#FFB762", marginBottom: "10px"}} type="button" size="md">
                      Email
                    </Button>                   
                     <Button style={{backgroundColor: "#FFB762", marginBottom: "10px"}} type="button" size="md">
                      Email
                    </Button>                   
                     <Button style={{backgroundColor: "#FFB762"}} type="button" size="md">
                      Email
                    </Button>                    
                    <Button style={{backgroundColor: "#FFB762"}} type="button" size="md">
                      Email
                    </Button>                    
                    <Button style={{backgroundColor: "#FFB762"}} type="button" size="md">
                      Email
                    </Button>
                    </GridItem>
                    </GridContainer>
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
