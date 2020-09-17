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

const useStyles = makeStyles(styles);

export default function HeaderLinksBuscar(props) {
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
                    color="transparent"
                    className={
                      classes.navLink
                    }
                  >{" "}
                   <i style={{fontSize: "13px", paddingRight: "5px"}} className={"fa fa-user"}/> Iniciar Sesion
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
                    <i style={{fontSize: "13px", paddingRight: "5px"}} className={"fa fa-users"}/>Resgistrarse
                  </Button>
                  </Link>
                </ListItem>
              </List>
            }
          />
    </List>
  );
}
