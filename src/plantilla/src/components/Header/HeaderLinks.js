/*eslint-disable*/
import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
/***** CONSULTAS BD ***************** */
import { db } from '../../../../firebase'

// @material-ui/icons
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Header from "../../components/Header/Header.js";
import logo from "../../../../assets/tugogo.png";


import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
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

  let [nombre, SetNombre] = useState("")
  let [noExiste, SetNoExiste] = useState(false)

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
    <List className={classes.list}>
      <Header
            color="transparent"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                <img style={{width: "90px", height: "112px", marginRight: "840px"}} src={logo} alt="..." className={navImageClasses} />
                </ListItem>
                <ListItem className={classes.listItem}>
                <form className={classes.form} onSubmit={ValidarData}>
                <CustomInput white
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl
                  }}
                  inputProps={{
                    placeholder: "Buscar Vcard",
                    onChange:(event)=>{SetNombre(event.target.value)},
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput
                    }
                  }}
                />
                <Button type="submit" style={{marginRight: "40px", marginTop: "24px"}} justIcon round color="white">
                  <Search className={classes.searchIcon} />
                </Button>
                </form>
                </ListItem>
              </List>
            }
          />
    </List>


    // <List className={classes.list}>
    //   <ListItem className={classes.listItem}>
    //   </ListItem>
    //           <div>
    //             <CustomInput
    //               white
    //               inputRootCustomClasses={classes.inputRootCustomClasses}
    //               formControlProps={{
    //                 className: classes.formControl
    //               }}
    //               inputProps={{
    //                 placeholder: "Buscar Vcard",
    //                 inputProps: {
    //                   "aria-label": "Search",
    //                   className: classes.searchInput
    //                 }
    //               }}
    //             />
    //             <Button justIcon round color="white">
    //               <Search className={classes.searchIcon} />
    //             </Button>
    //           </div>
    // </List>
  );
}
