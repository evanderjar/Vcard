import { db } from '../firebase'

export const GuardarFicha = async (ficha) => {

    await db.collection("Datos_usuarios").doc().set(ficha)
    .then(resultado=>{
        return("todo bien")
    }) 
}