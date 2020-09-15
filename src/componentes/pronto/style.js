import fondos_vcard from '../../assets/fondo.PNG'

export const style = {
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
}