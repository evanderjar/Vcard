import React, { useState, useEffect } from 'react'; // useEffect

import { db } from '../../../firebase'

import Navbar from '../../../componentes/navbar/navbar'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function TodasVcard(){

  let [todosUsuarios, SetTodosUsuarios] = useState([])
  let [mostrarReturn, SetMostrarReturn] = useState(false)
  let [generarvariasRutas, SetGenerarvariasRutas] = useState(false)
  let [filtro, SetFiltro] = useState("Enviado")
  // const classes = useStyles();

  useEffect(() => {

    db.collection('Datos_usuarios').where("tiene_usuario", "==",false)
    .onSnapshot(function(querySnapshot) {
        var reporte = [];
        querySnapshot.forEach(function(doc) {
            let datos = doc.data()
            datos.$key = doc.id
            reporte.push(datos);
        });
        console.log(reporte)
        SetTodosUsuarios(reporte)
        SetMostrarReturn(true)
    })
},[])


const AgregarNuevoUsuario = (event) => {
  event.preventDefault();
  localStorage.setItem('modificar_credenciales',"false")
  window.location = "/#/crear-usuarios"
}

const exportar = (event) => {
  event.preventDefault();
  console.log("aqui se exporta")
}

const GenerarDatos = (event) => {
  event.preventDefault();
  var cantidad = Number(generarvariasRutas)
  var fecha = new Date()
  fecha = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()

  for (let i = 0; i < cantidad; i++) {   
      const rutadinamica = Math.random().toString(36).substring(2)
      
      db.collection("Datos_usuarios").doc().set({
          nombre:"", 
          apellido:"", 
          nombre_ruta:rutadinamica,
          telefono:"",
          correo:"", 
          twitter:"",
          cargo:"",
          instagram:"",
          facebook:"",
          linkedin:"",
          skype:"",
          web:"",
          foto_perfil:"",
          tiktok:"",
          pais:"",
          direccion:"",
          ciudad:"",
          codigoPostal:"",
          provincia:"",
          telefonoLocal:"",
          leadPage:"",
          fecha,
          usuario:"",
          clave:"",
          enviado:false,
          tiene_usuario:false
      })
      .then(resultado=>{
          console.log("Guardo")
      })
  }

}

const modificarEstatus = async(event) => {
  event.preventDefault()

  await db.collection('Datos_usuarios').where("nombre_ruta", "==",event.target.value)
  .onSnapshot(function(querySnapshot) {
      var reporte = [];
      var contador = 0
      querySnapshot.forEach(function(doc) {
          let datos = doc.data()
          datos.$key = doc.id
          reporte.push(datos);
      });
      db.collection("Datos_usuarios").doc(reporte[0].$key).update({
          enviado:true
      })
  })


}

const Filtrar = async(event) => {
  event.preventDefault()
  console.log(filtro)
  var buscar = true
  if(filtro === "Enviado"){
      buscar = true
  }else if(filtro === "PorEnviar"){
      buscar = false
  }

  console.log(buscar)

  db.collection('Datos_usuarios').where("enviado", "==",buscar)
  .onSnapshot(function(querySnapshot) {
      var reporte = [];
      querySnapshot.forEach(function(doc) {
          let datos = doc.data()
          datos.$key = doc.id
          reporte.push(datos);
      });
      console.log(reporte)
      SetTodosUsuarios(reporte)
  })
}




if (mostrarReturn){
    return (
      <>
      <Navbar/>
        <div className="content">
        <Row style={{    marginRight: "350px", paddingBottom: "15px"}}>
          <div className="update ml-auto mr-auto">
              </div>
              <div className="update ml-auto mr-auto">
            {/* <Button
              className="btn-round"
              color="primary"
              type="submit" onClick={exportar}
            >
             Exportar
            </Button> */}
              </div>
              <div className="update ml-auto mr-auto">
              <select value={generarvariasRutas} onChange={(event)=>{SetGenerarvariasRutas(event.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <Button className="btn-round" style={{marginLeft:"5px"}}
              color="primary" type="submit" onClick={GenerarDatos}>
                Generar Vcards
            </Button>
              </div>
              <div className="update ml-auto mr-auto">
              <select value={filtro} onChange={(event)=>{SetFiltro(event.target.value)}}>
                <option value="Enviado">Enviado</option>
                <option value="PorEnviar">Por enviar</option>
                
            </select>
            <Button className="btn-round" style={{marginLeft:"5px"}}
              color="primary" type="submit" onClick={Filtrar}>
              Filtrar
            </Button>
              </div>
              {/* <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
             ACTUALIZAR
            </Button>
              </div> */}
          </Row>
          <Row>
            <Col md="12">
              <Card style={{marginLeft: "30px", marginRight: "30px"}}>
                <CardHeader>
                  <CardTitle tag="h4">Vcars Masivas</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive style={{paddingBottom: "92px"}}>
                    <thead className="text-primary" style={{textAlign:"center"}}>
                      <tr>
                        <th style={{textAlign: "center"}}>Ruta Dinamica</th>
                        <th align="center">fecha</th>
                        <th align="center">Acciones</th>
                        <th style={{textAlign: "center"}}>Enviar</th>
                      </tr>
                    </thead>
                    <tbody>
                    {todosUsuarios.map((row) => (
                      <tr key={row.nombre_ruta} style={{textAlign:"center"}}>
                        <td align="center">http://tienda.deproinf.com.ve/#/{row.nombre_ruta}</td>
                        <td component="th" scope="row">{row.fecha}</td>
                        
                        {
                            row.enviado ? 
                            <td component="th" scope="row">Enviado</td>
                            :
                            <td component="th" scope="row">Por enviar</td>
                        }
                        <td align="center">
<<<<<<< HEAD
                        <Button type="submit" className="btn-round" color="primary" onClick = {(event) =>{event.preventDefault(); window.location = `/#/${row.nombre_ruta}`}}>
                                Vcard
                        </Button>
                        <Button type="submit" value={row.nombre_ruta} onClick = {modificarEstatus} style={{marginLeft:"5px"}} className="btn-round" color="primary">
                            Enviado
                        </Button>
                        
=======
                        <button style={{marginRight: "10px"}} className="btn-round" color="primary" type="submit" onClick = {(event) =>{event.preventDefault(); window.location = `/#/${row.nombre_ruta}`}}>
                                Vcard
                            </button>
                            <button className="btn-round" color="primary" type="submit" value={row.nombre_ruta} onClick = {modificarEstatus}>
                                Enviado
                            </button>
>>>>>>> 826b3d80ce007a8c0055fe8929e0fa2104af03c5
                        </td>
                        </tr>
                       ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }else{
    return (
        <div></div>
    )
  }
  
}
export default TodasVcard;
