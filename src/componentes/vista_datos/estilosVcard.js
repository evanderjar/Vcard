import fondos_vcard from '../../assets/mountains.jpg';

export const VcardStile = {
    contenedor:{
        position: "absolute",
        zIndex: "2",
        paddingLeft: "42%"
    },
    telefono:{
        paddingTop:"15px",
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
        paddingRight: "10px",
    },
    nombre3:{
        paddingRight: "10px",
    },
    url:{
        marginLeft: "150px"
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
        paddingBottom: "20px",
    },
    linea:{
        border: "solid 1px blue",
        width: "124px"
    },
    cosa:{
        paddingBottom: "15px"
    },
    boton:{
        fontSize: "15px",
        color: "white",
        backgroundColor: "#5FD490",
        color:'white',
        width: "220px",
        height:"65px",
        borderRadius: "10PX 10PX 10PX 10PX",
        marginTop: "20px",
    },
    boton2:{
        fontSize: "15px",
        color: "white",
        backgroundColor: "#5FD490",
        color:'white',
        width: "100px",
        height:"40px",
        borderRadius: "10PX 10PX 10PX 10PX",
        marginTop:"5px",
    },
    boton_mensajes:{
        fontSize: "15px",
        color: "white",
        backgroundColor: "#5FD490",
        color:'white',
        width: "100px",
        height:"40px",
        borderRadius: "10PX 10PX 10PX 10PX",
        marginTop:"5px",
        marginLeft:"10px"
    }
} 