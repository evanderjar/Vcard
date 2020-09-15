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
        borderRadius: "100%",
        backgroundColor: "rgb(79, 188, 193)",
        marginLeft: "-45px",
        position: "inherit",
        zIndex: "2",
    },
    boton2:{
        height: "40px",
        borderRadius: "50%",
        width: "45px",
        backgroundColor: "#5be695",
        position: "inherit",
        zIndex: "2"
    },
    buscar_card:{
        height: "40px",
        fontSize: "15px",
        width: "50%",
        border: "3px solid #5be695",
        width: "420px",
        borderRadius: "50px",
        padding: "0px 10px",
        position: "inherit",
        zIndex: "1"
        
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
        borderRadius: "100%",
        backgroundColor: "rgb(79, 188, 193)",
        marginLeft: "-45px",
        position: "inherit",
        zIndex: "2",

    }
}