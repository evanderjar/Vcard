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
    const classes = useStyles();


    
    useEffect(() => {

        db.collection('Datos_usuarios')
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
        window.location = "/#/crear-usuarios"
    }

    const exportar = (event) => {
        event.preventDefault();
        console.log("aqui se exporta")
    }

   const Eliminar = (event) => {
        event.preventDefault();
        const key  = event.target.value
        var contador = 0

        db.collection('Datos_usuarios').where("nombre_ruta", "==",key)
        .onSnapshot(function(querySnapshot) {
            var reporte = [];
            querySnapshot.forEach(function(doc) {
                let datos = doc.data()
                datos.$key = doc.id
                reporte = datos ;
                contador++ 
            });
            if(contador === 1 && reporte.length !== 0){
                console.log(reporte)
                db.collection("Datos_usuarios").doc(reporte.$key).delete()
                .then(aliminado=>{
                    alert("se elimino con exito")
                    contador = 0
                })
            }
        })
   }

   const Modificar = (event) => {
        event.preventDefault();
        console.log("aqui se modifica")
    }

    const ModificarCredenciales = (event) =>{
        
        event.preventDefault();
        const nombre_ruta  = event.target.value
        localStorage.setItem('modificar_credenciales',"true")
        localStorage.setItem('nombre_ruta',nombre_ruta)
        window.location = '/#/crear-usuarios'
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
            
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="center">apellido</TableCell>
                        <TableCell align="center">Correo</TableCell>
                        <TableCell align="center">Ruta Dinamica</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todosUsuarios.map((row) => (
                        <TableRow key={row.nombre_ruta}>
                        <TableCell component="th" scope="row">
                            {row.nombre}
                        </TableCell>
                        <TableCell align="center">{row.apellido}</TableCell>
                        <TableCell align="center">{row.correo}</TableCell>
                        <TableCell align="center">{row.nombre_ruta}</TableCell>
                        <TableCell align="center">
                            <button type="submit" onClick={Modificar}>
                                Modificar Vcard
                            </button>
                            <button type="submit" value={row.nombre_ruta} onClick={Eliminar}>
                                Eliminar
                            </button>
                            <button type="submit" onClick = {(event) =>{event.preventDefault(); window.location = `/#/${row.nombre_ruta}`}}>
                                Vcard
                            </button>

                            <button type="submit" value={row.nombre_ruta} onClick = {ModificarCredenciales}>
                                Modificar credenciales
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