import React, { useState, useEffect } from 'react'; // useEffect

/******** IMPORTAR BASE DE DATOS ************************* */
import { app, db } from '../../firebase'

/**** FUNCION PARA GUARDAR REGISTROS********************************** */
import { GuardarFicha } from '../../consultas/consultas'

function CrearUsuario(){
    let [usuario, SetUsuario] = useState("")
    let [clave, SetClave] = useState("")
    let [confirmarClave, SetConfirmarClave] = useState("")
    let [rutaDinamica, SetRutaDinamica] = useState("")
    let [seGuardo, SetSeGuardo] = useState(false)


    useEffect(() => {
      
      if(localStorage.getItem('modificar_credenciales') == "true"){
        db.collection('Datos_usuarios').where("nombre_ruta", "==",localStorage.getItem('nombre_ruta'))
        .onSnapshot(function(querySnapshot) {
            var reporte = [];
            querySnapshot.forEach(function(doc) {
                let datos = doc.data()
                datos.$key = doc.id
                reporte = datos ;
            });
            SetUsuario(reporte.usuario)
            SetClave(reporte.clave)
        })
      }

    },[])


    const nuevoUsuario = async (event) => {
        event.preventDefault();
        const rutadinamica = Math.random().toString(36).substring(2)

        if(clave === confirmarClave){

          if(localStorage.getItem('modificar_credenciales') == "false"){
            try {
              // await app
              // .auth()
              // .createUserWithEmailAndPassword(usuario, clave)
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
                        foto_perfil:"",
                        usuario,
                        clave

                        })
                        .then(Guardo=>{
                        console.log("Guardo")
                        SetRutaDinamica(rutadinamica)
                        SetSeGuardo(true)

                          
                        })
                        // console.log(reporte)
                        // console.log(contador)
                      }if(reporte.length > 0 && contador === 0){
                      
                      }
                  })
              } catch (error) {
                alert(error);
              }
          }else if(localStorage.getItem('modificar_credenciales') == "true"){
            await db.collection('Datos_usuarios').where("nombre_ruta", "==",localStorage.getItem('nombre_ruta'))
                .onSnapshot(function(querySnapshot) {
                    var reporte = [];
                    var contador = 0
                    querySnapshot.forEach(function(doc) {
                        let datos = doc.data()
                        datos.$key = doc.id
                        reporte=datos;
                    });
                    if(reporte.length !== 0){
                      db.collection("Datos_usuarios").doc(reporte.$key).update({
                        usuario,
                        clave
                      }).then(actualizado=>{
                        alert("se actualizo")
                      })
                    }
                    
                })
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
            <button type="submit" onClick = {(event) =>{event.preventDefault(); window.location = "/#/Administrar-Vcard"}} className="btn btn-primary"> 
                volver
              </button>
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
            <div></div>
            <label>
              Confirmar clave:
              <input style={{fontSize: "15px"}} class="form-control" placeholder="Confirmar clave" type="text" name="confirmarClave" value={confirmarClave} onChange={(event)=>{SetConfirmarClave(event.target.value)}} required/>
            </label>
            </div>
            
            {
              localStorage.getItem('modificar_credenciales') == "true" ? 
              <button className="btn btn-primary"> 
                Actualizar
              </button>
              :
              <button className="btn btn-primary"> 
                Crear usuario
              </button>
            }
          </form>

          {
            seGuardo ? 
            <div>
              <span>El link del usuario creado es: <a href={`http://tienda.deproinf.com.ve/#/${rutaDinamica}`} target="_blank">{`http://tienda.deproinf.com.ve/#/${rutaDinamica}`} </a></span>
              <button type="submit" onClick = {(event) =>{event.preventDefault(); window.location = "/#/Administrar-Vcard"}} className="btn btn-primary"> 
                Ver todos usuarios
              </button>
        
            <button type="submit" onClick = {(event) =>{event.preventDefault(); window.location = `/#/${rutaDinamica}`}} className="btn btn-primary"> 
                Ver VCard del usuario
            </button>
            </div>
            :''
          }

        </div>
    )
}


export default CrearUsuario