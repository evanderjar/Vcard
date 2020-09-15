import React, { useState } from 'react'; // useEffect

/******** IMPORTAR BASE DE DATOS ************************* */
import { app, db } from '../../firebase'

/**** FUNCION PARA GUARDAR REGISTROS********************************** */
import { GuardarFicha } from '../../consultas/consultas'

function CrearUsuario(){
    let [usuario, SetUsuario] = useState("")
    let [clave, SetClave] = useState("")
    let [confirmarClave, SetConfirmarClave] = useState("")

    const nuevoUsuario = async (event) => {
        event.preventDefault();
        const rutadinamica = Math.random().toString(36).substring(2)

        if(clave === confirmarClave){
            try {
                await app
                  .auth()
                  .createUserWithEmailAndPassword(usuario, clave)
                    // window.location ="/#/login" 
                    await db.collection('Datos_usuarios').where("nombre_ruta", "==",rutadinamica)
                    .onSnapshot(function(querySnapshot) {
                        var reporte = [];
                        var contador = 0
                        querySnapshot.forEach(function(doc) {
                            let datos = doc.data()
                            datos.$key = doc.id
                            reporte.push(datos);
                        });
                        if(reporte.length === 0 ){
                            console.log("no existe")
                            contador++
                            GuardarFicha({nombre:"", 
                            apellido:"", 
                            nombre_ruta:rutadinamica,
                            telefono:"",
                            correo:usuario, 
                            twitter:"",
                            cargo:"",
                            instagram:"",
                            facebook:"",
                            linkedin:"",
                            skype:"",
                            web:"",
                            foto_perfil:""

                            })
                            .then(Guardo=>{
                            console.log("Guardo")
                            // window.location ="/#/"+nombre_ruta 
                            // SetExisteCodigo(false)
                            // localStorage.setItem('cargo_formulario','true')
                            })
                            // console.log(reporte)
                            // console.log(contador)
                        }if(reporte.length > 0 && contador === 0){
                        }
                    })
              } catch (error) {
                alert(error);
              }
        }else{
            alert("Las contraseñas no son iguales")
        }

        console.log(usuario)
        console.log(clave)
        console.log(rutadinamica)
    }

    return (
        <div>
            <form onSubmit={nuevoUsuario}> 
            <div class="form-group">      
            <label>
              usuario:
              <input style={{fontSize: "15px"}} class="form-control" placeholder="correo" type="email" name="usuario" value={usuario} onChange={(event)=>{SetUsuario(event.target.value)}} required/>
            </label>
            </div>
            <div class="form-group">
            <label>
              clave:
              <input style={{fontSize: "15px"}} class="form-control" placeholder="clave" type="text" name="clave" value={clave} onChange={(event)=>{SetClave(event.target.value)}} required/>
            </label>
            <label>
              Confirmar clave:
              <input style={{fontSize: "15px"}} class="form-control" placeholder="Confirmar clave" type="text" name="confirmarClave" value={confirmarClave} onChange={(event)=>{SetConfirmarClave(event.target.value)}} required/>
            </label>
            <div></div>
            <button className="btn btn-primary"> 
                crear
            </button>
            </div>
          </form>
        </div>
    )
}


export default CrearUsuario