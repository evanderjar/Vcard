import React, { useState } from 'react'; 

/***** CONSULTAS BD ***************** */
import { db } from '../../firebase'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

/** Aqui se traen los estilos (es un objeto en este archivo)**** */
import { style } from './style'
import '../../assets/tugogo.png'


/****** COMPONENTE NAVBAR *************** */
import Navbar from '../navbar/navbar'

function BuscarCard(){
  let [nombre, SetNombre] = useState("")
  let [noExiste, SetNoExiste] = useState(false)


  const ValidarData = async (event) => {
    event.preventDefault();

    await db.collection('Datos_usuarios').where("nombre_ruta", "==",nombre)
    .onSnapshot(function(querySnapshot) {
        var reporte = [];
        var contador = 0
        querySnapshot.forEach(function(doc) {
            let datos = doc.data()
            datos.$key = doc.id
            reporte.push(datos);
        });
        console.log(reporte)
        if(reporte.length !== 0) {
            console.log("Existe")
            contador++
            window.location ="/#/"+nombre 
            localStorage.setItem('cargo_formulario','false')
        }else {
            alert("el codigo "+ nombre +" no exite")
            SetNoExiste(true)
        }
    })
  }

    return(
        <section style = {style.back}>
            <div style={style.todo}>
            <Navbar />
                <div className="container">
                    <div className="abs-center">
                        <form onSubmit={ValidarData} className="p-3 form">
                            <div className="card-body row justify-content-center h-100">           
                                <img style={style.imagen} src="https://firebasestorage.googleapis.com/v0/b/prueba-app-1f667.appspot.com/o/tugogo.png?alt=media&token=6e4ac90a-f26a-4caa-9037-bd269a95c3c5" alt="icono"></img> 
                            </div>
                            <div className="input-group" style={{justifyContent: 'center', marginTop: "10px"}}>
                                <input style={style.buscar_card} id="exampleInputEmail1" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Ingrese el codigo" type="text" name="name" value={nombre} onChange={(event)=>{SetNombre(event.target.value)}} required/>
                                    <span style={style.span_boton}>
                                        <button className="btn" type="submit" style={style.boton}> 
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </span>
                            </div>
                            {/* {noExiste ? 
                                <h2 style={style.error}>No exite el codigo {nombre}</h2>: ''
                                } */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuscarCard;
