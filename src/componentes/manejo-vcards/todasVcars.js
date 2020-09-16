import React, { useState, useEffect } from 'react'; // useEffect

import { db } from '../../firebase'

/******** MATERIAL UI**************** */
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function TodasVcard(){

    let [todosUsuarios, SetTodosUsuarios] = useState([])
    let [mostrarReturn, SetMostrarReturn] = useState(false)
    let [generarvariasRutas, SetGenerarvariasRutas] = useState(false)
    let [filtro, SetFiltro] = useState("Enviado")
    const classes = useStyles();


    
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

//    const Eliminar = (event) => {
//         event.preventDefault();
//         const key  = event.target.value
//         var contador = 0
        

//         if(window.confirm("Seguro que quiere eliminar el usuario")){
//             db.collection('Datos_usuarios').where("nombre_ruta", "==",key)
//             .onSnapshot(function(querySnapshot) {
//                 var reporte = [];
//                 querySnapshot.forEach(function(doc) {
//                     let datos = doc.data()
//                     datos.$key = doc.id
//                     reporte = datos ;
//                     if(contador === 0){
//                         contador++ 
//                     }
//                 });
                
//                 if(contador === 1 && reporte.length !== 0){
//                     console.log(reporte)
//                     db.collection("Datos_usuarios").doc(reporte.$key).delete()
//                     .then(aliminado=>{
//                         localStorage.getItem('modificar_credenciales',"")
//                         alert("se elimino con exito")
//                     })
//                 }
//             })
//         }else{

//         }  
//     }


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
        <div>
            <button type="submit" onClick={AgregarNuevoUsuario}>
                Agregar nuevo usuario
            </button>
            <div></div>
            <button type="submit" onClick={exportar}>
                Exportar
            </button>
            <div></div>
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
            <button type="submit" onClick={GenerarDatos}>
                generar Vcards
            </button>
            <div></div>
            <select value={filtro} onChange={(event)=>{SetFiltro(event.target.value)}}>
                <option value="Enviado">Enviado</option>
                <option value="PorEnviar">Por enviar</option>
                
            </select>
            <button type="submit" onClick={Filtrar}>
                generar Vcards
            </button>
            
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {/* <TableCell>Nombre</TableCell>
                        <TableCell align="center">apellido</TableCell>
                        <TableCell align="center">Correo</TableCell> */}
                        <TableCell align="center">Ruta Dinamica</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                        <TableCell align="center">Enviar</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todosUsuarios.map((row) => (
                        <TableRow key={row.nombre_ruta}>
                        {/* <TableCell component="th" scope="row">{row.nombre}</TableCell>
                        <TableCell align="center">{row.apellido}</TableCell>
                        <TableCell align="center">{row.correo}</TableCell> */}
                        <TableCell align="center">http://tienda.deproinf.com.ve/#/{row.nombre_ruta}</TableCell>
                        <TableCell component="th" scope="row">{row.fecha}</TableCell>
                        
                        {
                            row.enviado ? 
                            <TableCell component="th" scope="row">Enviado</TableCell>
                            :
                            <TableCell component="th" scope="row">Por enviar</TableCell>
                        }
                        <TableCell align="center">
                            {/* <button type="submit" value={row.nombre_ruta} onClick={Eliminar}>
                                Eliminar
                            </button> */}
                            <button type="submit" onClick = {(event) =>{event.preventDefault(); window.location = `/#/${row.nombre_ruta}`}}>
                                Vcard
                            </button>
                            <button type="submit" value={row.nombre_ruta} onClick = {modificarEstatus}>
                                Enviado
                            </button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}else{
    return (
        <div></div>
    )
}
    
}

export default TodasVcard