// import React, { useState, useEffect } from 'react'; // useEffect

// /***** CONSULTAS BD ***************** */
// import { GuardarFicha } from '../../consultas/consultas' 

// import { db, storage } from '../../firebase'

// import { style } from './estilos'
// import {
//   CContainer,
//   CRow
// } from '@coreui/react'
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import { StepIcon } from '@material-ui/core';
// import imagen_perfil from '../../assets/user-icono.jpg';

// import Slidevar from '../sidevar/sidevar';
// import imagen_anonimo from '../../assets/user-icono.jpg';


// function Formulario() {
//   let [nombre, SetNombre] = useState("")
//   let [apellido, SetApellido] = useState("")
//   let [codigo_telefono, SetCodigo_telefono] = useState("")
//   let [telefono, SetTelefono] = useState("")
//   let [cargo, SetCargo] = useState("")
//   let [nombre_ruta, SetNombre_ruta] = useState("")
//   let [correo, SetCorreo] = useState("")
//   let [twitter, SetTwitter] = useState("")
//   let [instagram, SetInstagram] = useState("")
//   let [facebook, SetFacebook] = useState("")
//   let [linkedin, SetLinkedin] = useState("")
//   let [skype, SetSkype] = useState("")
//   let [web, SetWeb] = useState("")
//   let [tiktok, SetTiktok] = useState("")
//   let [leadPage, SetLeadPage] = useState("")
//   let [pais, SetPais] = useState("")
//   let [direccion, SetDireccion] = useState("")
//   let [ciudad, SetCiudad] = useState("")
//   let [codigoPostal, SetCodigoPostal] = useState("")
//   let [provincia, SetProvincia] = useState("")
//   let [telefonoLocal, SetTelefonoLocal] = useState("")
//   let [clave, SetClave] = useState("")
//   let [confirmarClave, SetConfirmarClave] = useState("")
//   let [primeraVez, SetPrimeraVez] = useState(false)
  


//   /************************************************ */
//   let [imagen, SetImagen] = useState(imagen_perfil)
//   let [mostrarImagen, SetMostrarImagen] = useState(true)
//   let [existeCodigo, SetExisteCodigo] = useState(false)
//   let [actualizar, SetActualizar] = useState(false)
//   let [mostrarReturn, SetMostrarReturn] = useState(false)
//   let [key, SetKey] = useState("")


//   useEffect(() => {
//     var usuario = localStorage.getItem('usuario')

//     if(localStorage.getItem('ruta') !== ""){
//       db.collection('Datos_usuarios').where('correo', '==', usuario).where('nombre_ruta', '==', localStorage.getItem('ruta')).get()
//       .then(snapshot => {
//         var reporte = []
//         if (snapshot.empty) {
//           console.log("no exite")
//             SetActualizar(false)
//             SetMostrarReturn(true)
//         }else{
//           snapshot.forEach(doc => {
//             let datos = doc.data()
//             datos.$key = doc.id
//             reporte.push(datos);
//           });

//           reporte.forEach(element=>{
//             if(element.nombre_ruta === localStorage.getItem('ruta')){
//               reporte = element
//             }
//           })

//           console.log(reporte)

            
//           if(reporte.foto_perfil ==""){
//             reporte.foto_perfil = imagen_anonimo
//             SetImagen("")
//           }else{
//             SetImagen(reporte.foto_perfil)
//           }
//           console.log(imagen)

//           console.log(reporte)
//           SetCorreo(usuario)
//           SetKey(reporte.$key)
//           SetNombre(reporte.nombre)
//           SetApellido(reporte.apellido)
//           SetCodigo_telefono("")
//           SetTelefono(reporte.telefono)
//           SetCargo(reporte.cargo)
//           SetTwitter(reporte.twitter)
//           SetInstagram(reporte.instagram)
//           SetFacebook(reporte.facebook)
//           SetLinkedin(reporte.linkedin)
//           SetSkype(reporte.skype)
//           SetWeb(reporte.web)
//           SetTiktok(reporte.tiktok)
//           SetLeadPage(reporte.leadPage)
//           SetPais(reporte.pais)
//           SetDireccion(reporte.direccion)
//           SetCiudad(reporte.ciudad)
//           SetCodigoPostal(reporte.codigoPostal)
//           SetProvincia(reporte.provincia)
//           SetTelefonoLocal(reporte.telefonoLocal)
//           SetNombre_ruta(reporte.nombre_ruta)
//           SetImagen(reporte.foto_perfil)
//           SetClave(reporte.clave)
//           SetPrimeraVez(reporte.tiene_usuario)


//           SetActualizar(true)
//           SetMostrarReturn(true)
//         }
//       })
//     }else{
//       db.collection('Datos_usuarios').where('correo', '==', usuario).get()
//       .then(snapshot => {
//         var reporte = []
//         if (snapshot.empty) {
//           console.log("no exite")
//             SetActualizar(false)
//             SetMostrarReturn(true)
//         }else{
//           snapshot.forEach(doc => {
//             let datos = doc.data()
//             datos.$key = doc.id
//             reporte.push(datos);
//           })
//           console.log(reporte)
            
//           if(reporte.foto_perfil ==""){
//             reporte.foto_perfil = imagen_anonimo
//             SetImagen("")
//           }else{
//             SetImagen(reporte.foto_perfil)
//           }
//           console.log(imagen)

//           console.log(reporte)
//           SetCorreo(usuario)
//           SetKey(reporte[0].$key)
//           SetNombre(reporte[0].nombre)
//           SetApellido(reporte[0].apellido)
//           SetCodigo_telefono("")
//           SetTelefono(reporte[0].telefono)
//           SetCargo(reporte[0].cargo)
//           SetTwitter(reporte[0].twitter)
//           SetInstagram(reporte[0].instagram)
//           SetFacebook(reporte[0].facebook)
//           SetLinkedin(reporte[0].linkedin)
//           SetSkype(reporte[0].skype)
//           SetWeb(reporte[0].web)
//           SetTiktok(reporte[0].tiktok)
//           SetLeadPage(reporte[0].leadPage)
//           SetPais(reporte[0].pais)
//           SetDireccion(reporte[0].direccion)
//           SetCiudad(reporte[0].ciudad)
//           SetCodigoPostal(reporte[0].codigoPostal)
//           SetProvincia(reporte[0].provincia)
//           SetTelefonoLocal(reporte[0].telefonoLocal)
//           SetNombre_ruta(reporte[0].nombre_ruta)
//           SetImagen(reporte[0].foto_perfil)
//           SetClave(reporte[0].clave)
//           SetPrimeraVez(reporte[0].tiene_usuario)


//           SetActualizar(true)
//           SetMostrarReturn(true)
//         }
//       })
//     }
    

//   },[])



//   const detectarImagen = event => {
//     const image = event.target.files[0]
//     const numero_automatico = Math.random().toString(36).substring(2)
//     const filePath = '/foto_perfil/'+ image.name
//     const uploadTask = storage.ref(filePath).put(image)
//     uploadTask.on('state_changed', 
//     (snapShot) => {
//       console.log(snapShot)
//     }, (err) => {
//       console.log(err)
//     }, () => {
//       storage.ref('foto_perfil').child(image.name).getDownloadURL()
//        .then(fireBaseUrl => {
//          console.log(fireBaseUrl)
//          SetImagen("")
//          SetImagen(fireBaseUrl)
//          SetMostrarImagen(true)
//        })
//     })
//   }


//   const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       color: '#eaeaf0',
//       // display: 'flex',
//       height: 22,
//       alignItems: 'center',
//       justifyContent:"center",
//     },
//     button: {
//       marginTop: theme.spacing(1),
//       marginRight: theme.spacing(1),
//     },
//     actionsContainer: {
//       marginBottom: theme.spacing(2),
//     },
//     resetContainer: {
//       padding: theme.spacing(3),
//     },
//     active: {
//       color: '#784af4',
//     },
//     circle: {
//       width: "50px",
//       height: 8,
//       borderRadius: '50%',
//       backgroundColor: 'currentColor',
//     },
//     completed: {
//       color: '#784af4',
//       zIndex: 1,
//       fontSize: 18,
//     },
//   }));

//   const getSteps = () => {
//     return ['Informacion personal', 'Redes sociales', 'Crear VCard'];
//   }

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <div>
//           <form> 
//           { mostrarImagen ? 
//             <img src={imagen} alt="foto perfil" Style="width: 125px;" required></img>
//           : null } 
//             <div></div> 
//             <div class="form-group">      
//             <label>
//               <input type="file" accept=".png, .jpg" Style="margin-top: 125px;" Style="margin-top: 15px;margin-bottom: 10px;" name="image" onChange={detectarImagen} required/>
//             </label>
//             </div>  
//             <div></div>
//             <CRow>
//             <div class="form-group">
//             <label style={style.titulos}>
//               Nombre:
//               <input style={{fontSize: "15px"}} class="form-control" type="text" name="name" value={nombre} onChange={(event)=>{SetNombre(event.target.value)}} required autofocus/>
//             </label>
//             </div>
//             <div class="form-group">
//             <label style={style.titulos}>
//               Apellido:
//               <input style={{fontSize: "15px"}} class="form-control" type="text" name="apellido" value={apellido} onChange={(event)=>{SetApellido(event.target.value)}} required/>
//             </label>
//             </div>
//             <div class="form-group">
//             <label style={{fontSize: "15px"}} style={style.titulos}>
//               Cargo:
//               <input style={{fontSize: "15px"}} class="form-control" type="text" name="cargo" value={cargo} onChange={(event)=>{SetCargo(event.target.value)}} required/>
//             </label>
//             </div>
//             </CRow>
//             <CRow>
//             <div class="form-group">
//             <label style={style.titulos}>
//               Codigo +:
//               <input style={{fontSize: "15px"}} class="form-control" type="number" name="codigo_telefono" value={codigo_telefono} onChange={(event)=>{SetCodigo_telefono(event.target.value)}} required/>
//             </label>
//             </div>
//             <div class="form-group">
//             <label style={style.titulos}>
//               Telefono (sin 0):
//               <input style={{fontSize: "15px"}} class="form-control" type="number" name="telefono" value={telefono} onChange={(event)=>{SetTelefono(event.target.value)}} required/>
//             </label>
//             </div>
//             <div class="form-group">
//             <label  style={style.titulos}>
//               Correo:
//               <input style={{fontSize: "15px"}} class="form-control" type="email" name="correo" value={correo} onChange={(event)=>{SetCorreo(event.target.value)}} required/>
//             </label>
//             </div>
//             </CRow>
//             <CRow>
//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Pais:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="pais" value={pais} onChange={(event)=>{SetPais(event.target.value)}} required/>
//                 </label>
//               </div>

//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Direccion:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="direccion" value={direccion} onChange={(event)=>{SetDireccion(event.target.value)}} required />
//                 </label>
//               </div>

//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Ciudad:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="ciudad" value={ciudad} onChange={(event)=>{SetCiudad(event.target.value)}} required />
//                 </label>
//               </div>
//             </CRow>
//             <CRow>
//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Codigo Postal:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="codigoPostal" value={codigoPostal} onChange={(event)=>{SetCodigoPostal(event.target.value)}} required/>
//                 </label>
//               </div>

//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Provincia:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="provincia" value={provincia} onChange={(event)=>{SetProvincia(event.target.value)}} required/>
//                 </label>
//               </div>

//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Telefono Local (Sin 0 y con codigo):
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="telefonoLocal" value={telefonoLocal} onChange={(event)=>{SetTelefonoLocal(event.target.value)}} required/>
//                 </label>
//               </div>
//             </CRow>
//             {
//               primeraVez ? 
//               ''
//               :
//               <CRow>
//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Clave:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="clave" value={clave} onChange={(event)=>{SetClave(event.target.value)}} required/>
//                 </label>
//               </div>

//               <div class="form-group">
//                 <label style={style.titulos}>
//                   Repetir Clave:
//                   <input style={{fontSize: "15px"}} class="form-control" type="text" name="confirmarClave" value={confirmarClave} onChange={(event)=>{SetConfirmarClave(event.target.value)}} required/>
//                 </label>
//               </div>
//             </CRow>
//             }
//           </form>
//         </div>;
//       case 1:
//         return <div>
//           <CRow>
//           <div class="form-group">
//           <label style={style.titulos}>
//             Twitter:
//             <input style={{fontSize: "15px"}} class="form-control" type="text" name="twitter" value={twitter} onChange={(event)=>{SetTwitter(event.target.value)}}/>
//           </label>
//           <p style={{fontStyle: "italic"}}>Ejemplo: https://twitter.com/usuario o usuario</p>
//           </div>
//           <div class="form-group">
//           <label style={style.titulos}>
//             Instagram:
//             <input style={{fontSize: "15px"}} class="form-control" type="text" name="instagram" value={instagram} onChange={(event)=>{SetInstagram(event.target.value)}}/>
//           </label>
//           <p style={{fontStyle: "italic"}}>Ejemplo: https://instagram/usuario o usuario (sin @)</p>
//           </div>
//           <div class="form-group">
//           <label style={style.titulos}>
//             Facebook:
//             <input style={{fontSize: "15px"}} class="form-control" type="text" name="facebook" value={facebook} onChange={(event)=>{SetFacebook(event.target.value)}}/>
//           </label>
//           <p style={{fontStyle: "italic"}}>Ejemplo: https://facebook.com/usuario</p>
//           </div>
//           </CRow>
//           <CRow>
//           <div class="form-group">
//           <label style={style.titulos}>
//             Linkedin:
//             <input style={{fontSize: "15px"}} class="form-control" type="text" name="linkedin" value={linkedin} onChange={(event)=>{SetLinkedin(event.target.value)}}/>
//           </label>
//           <p style={{fontStyle: "italic"}}>Ejemplo: https://linkedin/company/ejemplo</p>
//           </div>
//           <div class="form-group">
//           <label style={style.titulos}>
//             Skype:
//             <input style={{fontSize: "15px"}} class="form-control" type="text" name="skype" value={skype} onChange={(event)=>{SetSkype(event.target.value)}}/>
//           </label>
//           <p style={{fontStyle: "italic"}}>Ejemplo: usuario </p>
//           </div>
//           <div class="form-group">
//           <label style={style.titulos}>
//             Tik tok:
//             <input style={{fontSize: "15px"}} class="form-control" type="text" name="tiktok"  value={tiktok} onChange={(event)=>{SetTiktok(event.target.value)}}/>
//           </label>
//           <p style={{fontStyle: "italic"}}>Ejemplo: https://ejemplo.com/@usuario o @usuario </p>
//           </div>
//           </CRow>
            
//           <CRow>
//             <div class="form-group">
//               <label style={style.titulos}>
//                 Web Personal:
//                 <input style={{fontSize: "15px"}} class="form-control" type="text" name="web"  value={web} onChange={(event)=>{SetWeb(event.target.value)}}/>
//               </label>
//               <p style={{fontStyle: "italic"}}>Ejemplo: https://ejemplo.com o usuario</p>
//             </div>
//             <div class="form-group">
//               <label style={style.titulos}>
//                 Lead Page:
//                 <input style={{fontSize: "15px"}} class="form-control" type="text" name="leadPage"  value={leadPage} onChange={(event)=>{SetLeadPage(event.target.value)}}/>
//               </label>
//               <p style={{fontStyle: "italic"}}>Ejemplo: https://ejemplo.com o usuario</p>
//             </div>
//           </CRow>
//         </div>;
//       case 2:
//         if (actualizar){
//           return `Desea actualizar la VCard ?`;
//         }else{
//           return `Desea guardar su VCard ?`;
//         }
        
//       default:
//         return 'Unknown step';
//     }
//   }

//   const classes = useStyles();
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = getSteps();

//   const handleNext = async () => {

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     if (activeStep === 2){
      
//       if(actualizar){
        
//         /***** MODIFICAR SI ESTA COLOCANDO EL NOMBRE DE USUARIO TWITTER****** */
//         const split_twitter = twitter.split("/")
//         var cuenta_twitter = twitter

//         if(split_twitter.length === 1){
//           cuenta_twitter = "https://twitter.com/"+twitter
//         }

//         /***** MODIFICAR SI ESTA COLOCANDO EL NOMBRE DE USUARIO INSTAGRAM****** */
//         const split_instagram = instagram.split("/")
//         var cuenta_instagram = instagram
//         if(split_instagram.length === 1){
//           console.log(cuenta_instagram)
//           cuenta_instagram = "https://instagram.com/"+instagram
//         }

//         /***** MODIFICAR SI ESTA COLOCANDO EL NOMBRE DE USUARIO TIKTOK****** */
//         const split_tiktok = tiktok.split("/")
//         var cuenta_tiktok = tiktok
//         if(split_tiktok.length === 1){
//           cuenta_tiktok = "https://www.tiktok.com/"+tiktok
//         }

//         if(!primeraVez){
//           db.collection('Datos_usuarios').where('tiene_usuario', '==', true).get()
//           .then(snapshot => {
//             var reporte = []
//             var contador = 0
//             snapshot.forEach(doc => {
//               let datos = doc.data()
//               datos.$key = doc.id
//               reporte.push(datos);
//             });
//             reporte.forEach(element=>{
//               if(element.usuario === correo){
//                 console.log("son iguales")
//                 contador++
//               }
//             })
//             if(contador === 1){
//               alert("El correo utilizado ya esta en uso")
//             }else{
//               db.collection("Datos_usuarios").doc(key).set({
//                 nombre, 
//                 apellido, 
//                 nombre_ruta,
//                 telefono,
//                 correo, 
//                 twitter:cuenta_twitter,
//                 cargo,
//                 instagram:cuenta_instagram,
//                 facebook,
//                 linkedin,
//                 skype,
//                 web,
//                 foto_perfil:imagen,
//                 tiktok:cuenta_tiktok,
//                 pais,
//                 direccion,
//                 ciudad,
//                 codigoPostal,
//                 provincia,
//                 telefonoLocal,
//                 leadPage,
//                 usuario:correo,
//                 clave,
//                 enviado:true,
//                 tiene_usuario:true
      
//               })
//               .then(resultado=>{
//                   console.log("Atualizo")
//                   // window.location ="/#/"+nombre_ruta 
//                   SetExisteCodigo(false)
//                   localStorage.setItem('cargo_formulario','true')
//               })
//             }
            
//           })
//         }else{
          
//           db.collection("Datos_usuarios").doc(key).set({
//             nombre, 
//             apellido, 
//             nombre_ruta,
//             telefono,
//             correo, 
//             twitter:cuenta_twitter,
//             cargo,
//             instagram:cuenta_instagram,
//             facebook,
//             linkedin,
//             skype,
//             web,
//             foto_perfil:imagen,
//             tiktok:cuenta_tiktok,
//             pais,
//             direccion,
//             ciudad,
//             codigoPostal,
//             provincia,
//             telefonoLocal,
//             leadPage,
//             usuario:correo,
//             clave,
//             enviado:true,
//             tiene_usuario:true
  
//           })
//           .then(resultado=>{
//               console.log("Atualizo")
//               // window.location ="/#/"+nombre_ruta 
//               SetExisteCodigo(false)
//               localStorage.setItem('cargo_formulario','true')
//           })
//         }

//       }else{
//         localStorage.clear()
//         telefono = codigo_telefono+telefono
//         const rutadinamica = Math.random().toString(36).substring(2)
//         SetNombre_ruta(rutadinamica)


//         /***** MODIFICAR SI ESTA COLOCANDO EL NOMBRE DE USUARIO TWITTER****** */
//         const split_twitter = twitter.split("/")
//         var cuenta_twitter = twitter

//         if(split_twitter.length === 1){
//           cuenta_twitter = "https://twitter.com/"+twitter
//         }

//         /***** MODIFICAR SI ESTA COLOCANDO EL NOMBRE DE USUARIO INSTAGRAM****** */
//         const split_instagram = instagram.split("/")
//         var cuenta_instagram = instagram
//         if(split_instagram.length === 1){
//           console.log(cuenta_instagram)
//           cuenta_instagram = "https://instagram.com/"+instagram
//         }

//         /***** MODIFICAR SI ESTA COLOCANDO EL NOMBRE DE USUARIO TIKTOK****** */
//         const split_tiktok = tiktok.split("/")
//         var cuenta_tiktok = tiktok
//         if(split_tiktok.length === 1){
//           console.log(cuenta_tiktok)
//           cuenta_tiktok = "https://www.tiktok.com/"+tiktok
//         }

        

//         /********* CONSULTAR SI EL NOMBRE DE LA RUTA EXITE EN LA BD **************************** */
//         await db.collection('Datos_usuarios').where("nombre_ruta", "==",rutadinamica)
//         .onSnapshot(function(querySnapshot) {
//             var reporte = [];
//             var contador = 0
//             querySnapshot.forEach(function(doc) {
//                 let datos = doc.data()
//                 datos.$key = doc.id
//                 reporte.push(datos);
//             });
//             if(reporte.length === 0 ){
//               console.log("no existe")
//               contador++
//               SetExisteCodigo(false)
//               GuardarFicha({
//                 nombre, 
//                 apellido, 
//                 nombre_ruta,
//                 telefono,
//                 correo, 
//                 twitter:cuenta_twitter,
//                 cargo,
//                 instagram:cuenta_instagram,
//                 facebook,
//                 linkedin,
//                 skype,
//                 web,
//                 foto_perfil:imagen,
//                 tiktok:cuenta_tiktok,
//                 pais,
//                 direccion,
//                 ciudad,
//                 codigoPostal,
//                 provincia,
//                 telefonoLocal,
//                 leadPage,
//                 usuario:correo,
//                 clave,
//                 enviado:true,
//                 tiene_usuario:true
//               })
//               .then(Guardo=>{
//                 console.log("Guardo")
//                 // window.location ="/#/"+nombre_ruta 
//                 SetExisteCodigo(false)
//                 localStorage.setItem('cargo_formulario','true')
//               })
//               console.log(reporte)
//               console.log(contador)
//             }
//             if(reporte.length > 0 && contador === 0){
//               SetExisteCodigo(true)
//             }
//         })
//       }
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   if(mostrarReturn){
//     return (
//       <div className={classes.root} >
//         <Slidevar />
//         <div style={style.margen}>
//         <Stepper activeStep={activeStep} orientation="vertical">
//           {steps.map((label, index) => (
//             <Step key={label}>
//               <StepLabel >
//                 <span style={{fontSize: "20px"}}>{label}</span>
//                 </StepLabel>
//               <StepContent>
//                 <Typography>{getStepContent(index)}</Typography>
//                 <div className={classes.actionsContainer}>
//                   <div>
//                     <Button
//                       disabled={activeStep === 0}
//                       onClick={handleBack}
//                       className={classes.button}
//                     >
//                       Regresar
//                     </Button>
                    
//                     {
//                       actualizar ? <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={handleNext}
//                       className={classes.button}
//                     >
//                       {activeStep === steps.length - 1 ? 'Actualizar' : 'Siguiente'}
//                     </Button> : <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={handleNext}
//                       className={classes.button}
//                     >
//                       {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
//                     </Button>
//                     }
                    
                    
//                   </div>
//                 </div>
//               </StepContent>
//             </Step>
//           ))}
//         </Stepper>
//         {activeStep === steps.length && (
//           <Paper square elevation={0} className={classes.resetContainer}>
//             {/* { existeCodigo ? 
//                 <h6 style={style.error}>El codigo dado ya exite</h6>
//               : null } */}

//               { existeCodigo ? 
//                 null
//               : <span>Su link es: <a href={`http://tienda.deproinf.com.ve/#/${nombre_ruta}`} target="_blank">{`http://tienda.deproinf.com.ve/#/${nombre_ruta}`} </a></span>}     
//               <div></div>     
            
//             <Button onClick={handleReset} className={classes.button}>
//               Reset
//             </Button>
//           </Paper>
//         )}
//         </div>
//       </div>
//     );
//   }else{
//     return (
//       <div></div>
//     )
//   }
// }

// export default Formulario;