import fondos_vcard from '../../assets/Bg.jpg';

export const VcardStile = {
    contenedor:{
        position: "absolute",
        zIndex: "2",
        paddingLeft: "42%",
    },
    todo:{
        width: "100%",
        height: "100%"
    },
    back:{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "1",
        backgroundSize: "cover",
        // backgroundColor: "#4fd190"
        backgroundImage: `url(${fondos_vcard})`
    },
    imag:{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "15px",
        marginTop: "10px"
    },
    tarjeta:{
        marginLeft: "430px",
        paddingRight: "64px",
        marginTop: "-20px"
    },
    nombre:{
        justifyContent: "center"
    },   
    botonesEspacio:{
        justifyContent: "center",
        marginTop: "5px"
    },
    nombre2:{
        fontSize: "32px",
        paddingRight: "10px",
        fontFamily:"muli-light"
        
    },
    nombre3:{
        fontSize: "32px",
        paddingRight: "10px",
        fontFamily:"muli-light"
        
    },
    cargo:{
        fontSize: "18px",
        color: "#74d09d",
        fontFamily:"muli-light"
    },
    redesMargen:{
        justifyContent: "center",
        paddingTop: "35px"
    },
    redes:{
        textAlign: "center",
    },
    redes2:{
        paddingRight: "13px"
    },
    contacto:{
        fontSize: "17px",
        color:'#74d09d',
        fontFamily:"muli-bold"
    },
    linea:{
        border: "solid 1px blue",
        width: "124px"
    },
    espacio:{
        paddingBottom: "15px"
    },
    boton:{
           webkitBorderRadius: "14px",
           mozBorderRadius: "14px",
           borderRadius: "14px",
           height: "70px",
           lineHeight: "22px",
           color: "#FFFFFF",
           fontFamily:"muli-bold",
           width: "232px",
           fontSize: "15px",
           fontWeight: "400",
           padding: "20px",
           backgroundColor: "#59E795",
           border: "solid #24C645 1px",
           textDecoration: "none",
           display: "inline-block",
           cursor: "pointer",
           textAlign: "center",
    },
    boton2:{
           webkitBorderRadius: "14px",
           mozBorderRadius: "14px",
           borderRadius: "14px",
           height: "55px",
           lineHeight: "10px",
           color: "#FFFFFF",
           width: "115px",
           fontSize: "15px",
           fontWeight: "400",
           padding: "20px",
           backgroundColor: "#59E795",
           border: "solid #24C645 1px",
           textDecoration: "none",
           display: "inline-block",
           cursor: "pointer",
           textAlign: "center",
           marginRight:"5px",
           fontFamily:"muli-bold"
    },
    boton_mensajes:{
           webkitBorderRadius: "14px",
           mozBorderRadius: "14px",
           borderRadius: "14px",
           height: "55px",
           lineHeight: "10px",
           color: "#FFFFFF",
           fontFamily:"muli-bold",
           width: "115px",
           fontSize: "15px",
           fontWeight: "400",
           padding: "20px",
           backgroundColor: "#59E795",
           border: "solid #24C645 1px",
           textDecoration: "none",
           display: "inline-block",
           cursor: "pointer",
           textAlign: "center",
    },
    url:{
        marginLeft: "100px"
    },
    u:{
        marginRight: "100px"
    },
    separador:{
        border: "1px solid #4e4e4e",
        width: "140px"
    },
    icono:{
        width: "40px",
        height: "40px",
    }

} 