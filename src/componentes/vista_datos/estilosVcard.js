import fondos_vcard from '../../assets/mountains.jpg';

export const VcardStile = {
    contenedor:{
        position: "absolute",
        zIndex: "2",
        paddingLeft: "42%"
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
        marginLeft: "374px",
        paddingRight: "64px",
        marginTop: "-20px"
    },
    nombre:{
        justifyContent: "center"
    },
    nombre2:{
        fontSize: "32px",
        paddingRight: "10px"
        
    },
    nombre3:{
        fontSize: "32px",
        paddingRight: "10px"
        
    },
    cargo:{
        fontSize: "16px",
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
        color:'#4FBCC1',
        fontWeight:"900",
    },
    linea:{
        border: "solid 1px blue",
        width: "124px"
    },
    espacio:{
        paddingBottom: "15px"
    },
    boton:{
        fontSize: "15px",
        color: "white !important",
        backgroundColor: "#5FD490",
        width: "220px",
        height:"65px",
        borderRadius: "10PX 10PX 10PX 10PX",
        marginTop: "20px",
    },
    boton2:{
        fontSize: "15px",
        color: "white",
        backgroundColor: "#5FD490",
        width: "100px",
        height:"40px",
        borderRadius: "10PX 10PX 10PX 10PX",
        marginTop:"5px",
    },
    boton_mensajes:{
        fontSize: "15px",
        color: "white",
        backgroundColor: "#5FD490",
        width: "100px",
        height:"40px",
        borderRadius: "10PX 10PX 10PX 10PX",
        marginTop:"5px",
        marginLeft:"10px"
    },
    url:{
        marginLeft: "155px"
    },
    u:{
        marginRight: "170px"
    },
    separador:{
        border: "1px solid #4e4e4e",
        width: "140px"
    }

} 