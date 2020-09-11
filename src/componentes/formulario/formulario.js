import React, { useState } from 'react'; // useEffect

/***** CONSULTAS BD ***************** */
import { GuardarFicha } from '../../consultas/consultas' 

import { db, storage } from '../../firebase'

import { style } from './estilos'

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

  /************************************************ */
  let [imagen, SetImagen] = useState(imagen_perfil)
  let [mostrarImagen, SetMostrarImagen] = useState(true)
  let [existeCodigo, SetExisteCodigo] = useState(false)



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
            <img src={imagen} alt="foto perfil" Style="width: 70px;" required></img>
          : null }        
            <label>
              <input type="file" accept=".png, .jpg" name="image" onChange={detectarImagen} required/>
            </label>
            <div></div>
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
              <input style={{fontSize: "15px"}} class="form-control" type="email" name="correo" value={correo} onChange={(event)=>{SetCorreo(event.target.value)}} required/>
            </label>
            </div>
            {/* <label>
              http://tienda.deproinf.com.ve/#/
              <input type="text" name="nombre_ruta" value={nombre_ruta} onChange={(event)=>{SetNombre_ruta(event.target.value)}} required/>
            </label> */}
          </form>
        </div>;
      case 1:
        return <div>
          <div class="form-group">
          <label style={style.titulos}>
            Twitter:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="twitter" value={twitter} onChange={(event)=>{SetTwitter(event.target.value)}}/>
          </label>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Instagram:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="instagram" value={instagram} onChange={(event)=>{SetInstagram(event.target.value)}}/>
          </label>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Facebook:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="facebook" value={facebook} onChange={(event)=>{SetFacebook(event.target.value)}}/>
          </label>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Linkedin:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="linkedin" value={linkedin} onChange={(event)=>{SetLinkedin(event.target.value)}}/>
          </label>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Skype:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="skype" value={skype} onChange={(event)=>{SetSkype(event.target.value)}}/>
          </label>
          </div>
          <div class="form-group">
          <label style={style.titulos}>
            Web Personal:
            <input style={{fontSize: "15px"}} class="form-control" type="text" name="web" value={web} onChange={(event)=>{SetWeb(event.target.value)}}/>
          </label>
          </div>
        </div>;
      case 2:
        return `Desea guardar su VCard ?`;
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
              foto_perfil:imagen

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
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
                  </Button>
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
            : <span>Su link es: <a href={`http://tienda.deproinf.com.ve/#/${nombre_ruta}`} target="_blank">{`http://tienda.deproinf.com.ve/#/${nombre_ruta}`} </a></span>}     
            <div></div>     
          
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
      </div>
    </div>


   

  
  );
}

export default Formulario;