/**** UNA VARIABLE SE EXPORTA CON LOS CAMPOS **************** */
import fondos_buscar_vcard from '../../assets/background-login25.gif';

export const style = {
    imagen: {
        width: "120px",
    },
    formulario:{
        display:"inline-block",
        marginTop:"20px",
    },
    error:{
        marginTop:"10px",
        color:"red",
        textAlign: "center"
    },
    boton:{
        height: "40px",
        width: "65px",
        backgroundColor: "#4FBCC1"
    },
    buscar_card:{
        height: "40px",
        fontSize: "15px",
        width:"50%",
        
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
        backgroundImage: `url(${fondos_buscar_vcard})`
    },
    span_boton:{
        backgroundColor: "#4FBCC1"

    }
}