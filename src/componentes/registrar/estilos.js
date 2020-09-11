import fondos from '../../assets/imagen-registrobg4.jpg';


export const styles = {
    img:{
        width: "100%",
        height: "100%"
    },
    tarjeta:{
        paddingTop: "7%"
    },
    logo:{
        width: "25%",
        marginLeft: "180px"
    },
    inputs:{
        height: "35px",
        borderRadius: "5px"
    },
    boton:{
        fontSize: "15px",
        color: "white",
        backgroundColor: "#4fbcc1"
    },
    back:{
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "1",
        backgroundSize: "cover",
        backgroundImage: `url(${fondos})`
    },

}