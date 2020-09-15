import React, { useState, useEffect } from 'react'; // useEffect

/***** CONSULTAS BD ***************** */
import { GuardarFicha } from '../../consultas/consultas' 

import { db, storage } from '../../firebase'

import { style } from './estilos'
import {
  CContainer,
  CRow
} from '@coreui/react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { StepIcon } from '@material-ui/core';
import imagen_perfil from '../../assets/user-icono.jpg';

import Slidevar from '../sidevar/sidevar';
import imagen_anonimo from '../../assets/user-icono.jpg';


function Formulario() {
  let [nombre, SetNombre] = useState("")
  let [apellido, SetApellido] = useState("")
  let [codigo_telefono, SetCodigo_telefono] = useState("")
  let [telefono, SetTelefono] = useState("")
  let [cargo, SetCargo] = useState("")
  let [nombre_ruta, SetNombre_ruta] = useState("")
  let [correo, SetCorreo] = useState("")
  let [twitter, SetTwitter] = useState("")
  let [instagram, SetInstagram] = useState("")
  let [facebook, SetFacebook] = useState("")
  let [linkedin, SetLinkedin] = useState("")
  let [skype, SetSkype] = useState("")
  let [web, SetWeb] = useState("")
  let [tiktok, SetTiktok] = useState("")
  let [leadPage, SetLeadPage] = useState("")
  let [pais, SetPais] = useState("")
  let [direccion, SetDireccion] = useState("")
  let [ciudad, SetCiudad] = useState("")
  let [codigoPostal, SetCodigoPostal] = useState("")
  let [provincia, SetProvincia] = useState("")
  let [telefonoLocal, SetTelefonoLocal] = useState("")


  /************************************************ */
  let [imagen, SetImagen] = useState(imagen_perfil)
  let [mostrarImagen, SetMostrarImagen] = useState(true)
  let [existeCodigo, SetExisteCodigo] = useState(false)
  let [actualizar, SetActualizar] = useState(false)
  let [mostrarReturn, SetMostrarReturn] = useState(false)
  let [key, SetKey] = useState("")


  useEffect(() => {
    var usuario = localStorage.getItem('usuario')
    SetCorreo(usuario)
    db.collection('Datos_usuarios').where("correo", "==",usuario)
    .onSnapshot(function(querySnapshot) {
        var reporte = [];
        querySnapshot.forEach(function(doc) {
            let datos = doc.data()
            datos.$key = doc.id
            reporte.push(datos);
        });
        if(reporte.length === 0){
          console.log("no exite")
          SetActualizar(false)
          SetMostrarReturn(true)
        }else {
          console.log(reporte)
          if(reporte.foto_perfil ==""){
            reporte.foto_perfil = imagen_anonimo
            SetImagen("")
          }else{
            SetImagen(reporte.foto_perfil)
          }

          console.log(reporte)
          SetKey(reporte[0].$key)
          SetNombre(reporte[0].nombre)
          SetApellido(reporte[0].apellido)
          SetCodigo_telefono("")
          SetTelefono(reporte[0].telefono)
          SetCargo(reporte[0].cargo)
          SetTwitter(reporte[0].twitter)
          SetInstagram(reporte[0].instagram)
          SetFacebook(reporte[0].facebook)
          SetLinkedin(reporte[0].linkedin)
          SetSkype(reporte[0].skype)
          SetWeb(reporte[0].web)
          SetTiktok(reporte[0].tiktok)
          SetLeadPage(reporte[0].leadPage)
          SetPais(reporte[0].pais)
          SetDireccion(reporte[0].direccion)
          SetCiudad(reporte[0].ciudad)
          SetCodigoPostal(reporte[0].codigoPostal)
          SetProvincia(reporte[0].provincia)
          SetTelefonoLocal(reporte[0].telefonoLocal)
          SetNombre_ruta(reporte[0].nombre_ruta)
          SetImagen(reporte[0].foto_perfil)


          SetActualizar(true)
          SetMostrarReturn(true)
        }
    })

  },[])



  const detectarImagen = event => {
    const image = event.target.files[0]
    const numero_automatico = Math.random().toString(36).substring(2)
    const filePath = '/foto_perfil/'+ image.name
    const uploadTask = storage.ref(filePath).put(image)
    uploadTask.on('state_changed', 
    (snapShot) => {
      console.log(snapShot)
    }, (err) => {
      console.log(err)
    }, () => {
      storage.ref('foto_perfil').child(image.name).getDownloadURL()
       .then(fireBaseUrl => {
         console.log(fireBaseUrl)
         SetImagen("")
         SetImagen(fireBaseUrl)
         SetMostrarImagen(true)
       })
    })
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      color: '#eaeaf0',
      // display: 'flex',
      height: 22,
      alignItems: 'center',
      justifyContent:"center",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    active: {
      color: '#784af4',
    },
    circle: {
      width: "50px",
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
  }));

  const getSteps = () => {
    return ['Informacion personal', 'Redes sociales', 'Crear VCard'];
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <div>
          <form> 
          { mostrarImagen ? 
            <img src={imagen} alt="foto perfil" Style="width: 125px;" required></img>
          : null } 
            <div></div> 
            <div class="form-group">      
            <label>
              <input type="file" accept=".png, .jpg" Style="margin-top: 125px;" Style="margin-top: 15px;margin-bottom: 10px;" name="image" onChange={detectarImagen} required/>
            </label>
            </div>  
            <div></div>
            <CRow>
            <div class="form-group">
            <label style={style.titulos}>
              Nombre:
              <input style={{fontSize: "15px"}} class="form-control" type="text" name="name" value={nombre} onChange={(event)=>{SetNombre(event.target.value)}} required autofocus/>
            </label>
            </div>
            <div class="form-group">
            <label style={style.titulos}>
              Apellido:
              <input style={{fontSize: "15px"}} class="form-control" type="text" name="apellido" value={apellido} onChange={(event)=>{SetApellido(event.target.value)}} required/>
            </label>
            </div>
            <div class="form-group">
            <label style={{fontSize: "15px"}} style={style.titulos}>
              Cargo:
              <input style={{fontSize: "15px"}} class="form-control" type="text" name="cargo" value={cargo} onChange={(event)=>{SetCargo(event.target.value)}} required/>
            </label>
            </div>
            </CRow>
            <CRow>
            <div class="form-group">
            <label style={style.titulos}>
              Codigo +:
              <input style={{fontSize: "15px"}} class="form-control" type="number" name="codigo_telefono" value={codigo_telefono} onChange={(event)=>{SetCodigo_telefono(event.target.value)}} required/>
            </label>
            </div>
            <div class="form-group">
            <label style={style.titulos}>
              Telefono (sin 0):
              <input style={{fontSize: "15px"}} class="form-control" type="number" name="telefono" value={telefono} onChange={(event)=>{SetTelefono(event.target.value)}} required/>
            </label>
            </div>
            <div class="form-group">
            <label  style={style.titulos}>
              Correo:
              <input style={{fontSize: "15px"}} class="form-control" type="email" name="correo" value={correo} onChange={(event)=>{SetCorreo(event.target.value)}} required readOnly/>
            </label>
            </div>
            </CRow>
            <CRow>
              <div class="form-group">
                <label style={style.titulos}>
                  Pais:
                  <input style={{fontSize: "15px"}} class="form-control" type="text" name="pais" value={pais} onChange={(event)=>{SetPais(event.target.value)}} required/>
                </label>
              </div>

              <div class="form-group">
                <label style={style.titulos}>
                  Direccion:
                  <input style={{fontSize: "15px"}} class="form-control" type="text" name="direccion" value={direccion} onChange={(event)=>{SetDireccion(event.target.value)}} required />
                </label>
              </div>

              <div class="form-group">
                <label style={style.titulos}>
                  Ciudad:
                  <input style={{fontSize: "15px"}} class="form-control" type="text" name="ciudad" value={ciudad} onChange={(event)=>{SetCiudad(event.target.value)}} required />
                </label>
              </div>
            </CRow>
            <CRow>
              <div class="form-group">
                <label style={style.titulos}>
                  Codigo Postal:
                  <input style={{fontSize: "15px"}} class="form-control" type="text" name="codigoPostal" value={codigoPostal} onChange={(event)=>{SetCodigoPostal(event.target.value)}} required/>
                </label>
              </div>

              <div class="form-group">
                <label style={style.titulos}>
                  Provincia:
                  <input style={{fontSize: "15px"}} class="form-control" type="text" name="provincia" value={provincia} onChange={(event)=>{SetProvincia(event.target.value)}} required/>
                </label>
              </div>

              <div class="form-group">
                <label style={style.titulos}>
                  Telefono Local (Sin 0 y con codigo):
                  <input style={{fontSize: "15px"}} class="form-control" type="text" name="telefonoLocal" value={telefonoLocal} onChange={(event)=>{SetTelefonoLocal(event.target.value)}} required/>
                </label>
              </div>
            </CRow>
          </form>
        </div>;
      case 1:
        return <div>
          <CRow>
          <div class="form-group">
          <label style={style.titulos}>
            Twitter:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="twitter" value={twitter} onChange={(event)=>{SetTwitter(event.target.value)}}/>
          </label>
          <p style={{fontStyle: "italic"}}>Ejemplo: https://twitter.com/ejemplo</p>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Instagram:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="instagram" value={instagram} onChange={(event)=>{SetInstagram(event.target.value)}}/>
          </label>
          <p style={{fontStyle: "italic"}}>Ejemplo: https://instagram/ejemplo</p>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Facebook:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="facebook" alue={facebook} onChange={(event)=>{SetFacebook(event.target.value)}}/>
          </label>
          <p style={{fontStyle: "italic"}}>Ejemplo: https://facebookk.com/ejemplo</p>
          </div>
          </CRow>
          <CRow>
          <div class="form-group">
          <label style={style.titulos}>
            Linkedin:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="linkedin" value={linkedin} onChange={(event)=>{SetLinkedin(event.target.value)}}/>
          </label>
          <p style={{fontStyle: "italic"}}>Ejemplo: https://linkedin/company/ejemplo</p>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Skype:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="skype" value={skype} onChange={(event)=>{SetSkype(event.target.value)}}/>
          </label>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Tik tok:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="tiktok"  value={tiktok} onChange={(event)=>{SetTiktok(event.target.value)}}/>
          </label>
          <p style={{fontStyle: "italic"}}>Ejemplo: https://ejemplo.com</p>
          </div>
          </CRow>
            
          <CRow>
            <div class="form-group">
              <label style={style.titulos}>
                Web Personal:
                <input style={{fontSize: "15px"}} class="form-control" type="text" name="web"  value={web} onChange={(event)=>{SetWeb(event.target.value)}}/>
              </label>
              <p style={{fontStyle: "italic"}}>Ejemplo: https://ejemplo.com</p>
            </div>
            <div class="form-group">
              <label style={style.titulos}>
                Lead Page:
                <input style={{fontSize: "15px"}} class="form-control" type="text" name="leadPage"  value={leadPage} onChange={(event)=>{SetLeadPage(event.target.value)}}/>
              </label>
              <p style={{fontStyle: "italic"}}>Ejemplo: https://ejemplo.com</p>
            </div>
          </CRow>
        </div>;
      case 2:
        if (actualizar){
          return `Desea actualizar la VCard ?`;
        }else{
          return `Desea guardar su VCard ?`;
        }
        
      default:
        return 'Unknown step';
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = async () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2){
      
      if(actualizar){
        console.log(nombre_ruta)
        console.log("Va actualizar")
        console.log(imagen)
        
              db.collection("Datos_usuarios").doc(key).set({
                nombre, 
                apellido, 
                nombre_ruta,
                telefono,
                correo, 
                twitter,
                cargo,
                instagram,
                facebook,
                linkedin,
                skype,
                web,
                foto_perfil:imagen,
                tiktok,
                pais,
                direccion,
                ciudad,
                codigoPostal,
                provincia,
                telefonoLocal,
                leadPage
              })
              .then(resultado=>{
                  console.log("Atualizo")
                  // window.location ="/#/"+nombre_ruta 
                  SetExisteCodigo(false)
                  localStorage.setItem('cargo_formulario','true')
              })

      }else{
      
        localStorage.clear()
      
        telefono = codigo_telefono+telefono
        const rutadinamica = Math.random().toString(36).substring(2)
        SetNombre_ruta(rutadinamica)

        /********* CONSULTAR SI EL NOMBRE DE LA RUTA EXITE EN LA BD **************************** */
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
              SetExisteCodigo(false)
              GuardarFicha({nombre, 
                apellido, 
                nombre_ruta:rutadinamica,
                telefono,
                correo, 
                twitter,
                cargo,
                instagram,
                facebook,
                linkedin,
                skype,
                web,
                foto_perfil:imagen,
                tiktok,
                pais,
                direccion,
                ciudad,
                codigoPostal,
                provincia,
                telefonoLocal,
                leadPage
              })
              .then(Guardo=>{
                console.log("Guardo")
                // window.location ="/#/"+nombre_ruta 
                SetExisteCodigo(false)
                localStorage.setItem('cargo_formulario','true')
              })
              console.log(reporte)
              console.log(contador)
            }if(reporte.length > 0 && contador === 0){
              SetExisteCodigo(true)
            }
        })
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  if(mostrarReturn){
    return (
      <div className={classes.root} >
        <Slidevar />
        <div style={style.margen}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel >
                <span style={{fontSize: "20px"}}>{label}</span>
                </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Regresar
                    </Button>
                    
                    {
                      actualizar ? <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Actualizar' : 'Siguiente'}
                    </Button> : <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
                    </Button>
                    }
                    
                    
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            {/* { existeCodigo ? 
                <h6 style={style.error}>El codigo dado ya exite</h6>
              : null } */}

              { existeCodigo ? 
                null
              : <span>Su link es: <a href={`http://tugogo.com.mx/#/${nombre_ruta}`} target="_blank">{`http://tugogo.com.mx/#/${nombre_ruta}`} </a></span>}     
              <div></div>     
            
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
        </div>
      </div>
    );
  }else{
    return (
      <div></div>
    )
  }
}

export default Formulario;