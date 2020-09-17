import React, { useState, useEffect } from 'react'; // useEffect

/***** CONSULTAS BD ***************** */
import { GuardarFicha } from '../../../consultas/consultas' 

import { db, storage } from '../../../firebase'

import imagen_anonimo from '../../../assets/user-icono.jpg';
import imagen_perfil from '../../../assets/user-icono.jpg';
import Navbar from "../../../componentes/navbar/navbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Formulario2() {

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
  let [clave, SetClave] = useState("")
  let [confirmarClave, SetConfirmarClave] = useState("")
  let [primeraVez, SetPrimeraVez] = useState(false)
  
  /************************************************ */
  let [imagen, SetImagen] = useState(imagen_perfil)
  let [mostrarImagen, SetMostrarImagen] = useState(true)
  let [existeCodigo, SetExisteCodigo] = useState(false)
  let [actualizar, SetActualizar] = useState(false)
  let [mostrarReturn, SetMostrarReturn] = useState(false)
  let [key, SetKey] = useState("")

  useEffect(() => {
    var usuario = localStorage.getItem('usuario')

    if(localStorage.getItem('ruta') !== ""){
      db.collection('Datos_usuarios').where('correo', '==', usuario).where('nombre_ruta', '==', localStorage.getItem('ruta')).get()
      .then(snapshot => {
        var reporte = []
        if (snapshot.empty) {
          console.log("no exite")
            SetActualizar(false)
            SetMostrarReturn(true)
        }else{
          snapshot.forEach(doc => {
            let datos = doc.data()
            datos.$key = doc.id
            reporte.push(datos);
          });

          reporte.forEach(element=>{
            if(element.nombre_ruta === localStorage.getItem('ruta')){
              reporte = element
            }
          })

          console.log(reporte)

            
          if(reporte.foto_perfil ==""){
            reporte.foto_perfil = imagen_anonimo
            SetImagen("")
          }else{
            SetImagen(reporte.foto_perfil)
          }
          console.log(imagen)

          console.log(reporte)
          SetCorreo(usuario)
          SetKey(reporte.$key)
          SetNombre(reporte.nombre)
          SetApellido(reporte.apellido)
          SetCodigo_telefono("")
          SetTelefono(reporte.telefono)
          SetCargo(reporte.cargo)
          SetTwitter(reporte.twitter)
          SetInstagram(reporte.instagram)
          SetFacebook(reporte.facebook)
          SetLinkedin(reporte.linkedin)
          SetSkype(reporte.skype)
          SetWeb(reporte.web)
          SetTiktok(reporte.tiktok)
          SetLeadPage(reporte.leadPage)
          SetPais(reporte.pais)
          SetDireccion(reporte.direccion)
          SetCiudad(reporte.ciudad)
          SetCodigoPostal(reporte.codigoPostal)
          SetProvincia(reporte.provincia)
          SetTelefonoLocal(reporte.telefonoLocal)
          SetNombre_ruta(reporte.nombre_ruta)
          SetImagen(reporte.foto_perfil)
          SetClave(reporte.clave)
          SetPrimeraVez(reporte.tiene_usuario)


          SetActualizar(true)
          SetMostrarReturn(true)
        }
      })
    }else{
      db.collection('Datos_usuarios').where('correo', '==', usuario).get()
      .then(snapshot => {
        var reporte = []
        if (snapshot.empty) {
          console.log("no exite")
            SetActualizar(false)
            SetMostrarReturn(true)
        }else{
          snapshot.forEach(doc => {
            let datos = doc.data()
            datos.$key = doc.id
            reporte.push(datos);
          })
          console.log(reporte)
            
          if(reporte.foto_perfil ==""){
            reporte.foto_perfil = imagen_anonimo
            SetImagen("")
          }else{
            SetImagen(reporte.foto_perfil)
          }
          console.log(imagen)

          console.log(reporte)
          SetCorreo(usuario)
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
          SetClave(reporte[0].clave)
          SetPrimeraVez(reporte[0].tiene_usuario)


          SetActualizar(true)
          SetMostrarReturn(true)
        }
      })
    }
    

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
    return (
      <>
      <Navbar />
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img style={{width:" 445px",
                    position: "inherit",
                    zIndex: "1",
                    marginBottom: "-107px"}}
                    alt="..."
                    src={require("../assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                  { mostrarImagen ? 
                   <img src={imagen} alt="foto perfil" Style="width: 125px; margin-left: 125px;" required></img>
                    : null } 
                  </div>
                  <input type="file" accept=".png, .jpg" Style="margin-top: 125px;" Style="margin-top: 15px;margin-bottom: 10px; margin-left: 125px;" name="image" onChange={detectarImagen} required/>
                  {/* <button style={{marginLeft: "90px"}} className="btn btn-primary text-center">Subir Foto</button> */}
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center" tag="h4">Ver VCard</CardTitle>
                </CardHeader>
                <CardBody>
                <Row>
                <i style={{marginLeft: "15px"}} className="fas fa-share"></i>
                    <p style={{marginLeft: "20px"}}>Link Directo</p>
                </Row>
                    <p style={{marginLeft: "35px"}} color="primary">Link Vcard</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Perfil</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Email (disabled)</label>
                          <Input
                            disabled
                            type="email"
                            name="correo"
                            value={correo} onChange={(event)=>{SetCorreo(event.target.value)}} required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Codigo Vcard (disabled)</label>
                          <Input
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Cargo
                          </label>
                          <Input type="text" 
                          name="cargo" value={cargo} onChange={(event)=>{SetCargo(event.target.value)}} required/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Nombre</label>
                          <Input
                            type="text"
                            name="name"
                             value={nombre} onChange={(event)=>{SetNombre(event.target.value)}} required autofocus
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Apellido</label>
                          <Input
                            type="text"
                            name="apellido" value={apellido} onChange={(event)=>{SetApellido(event.target.value)}} required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Direccion</label>
                          <Input
                            type="text"
                            name="direccion"
                             value={direccion} onChange={(event)=>{SetDireccion(event.target.value)}} required 
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Ciudad</label>
                          <Input
                            type="text"
                            name="ciudad" value={ciudad} onChange={(event)=>{SetCiudad(event.target.value)}} required 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Pais</label>
                          <Input
                            type="text"
                            name="pais" value={pais} onChange={(event)=>{SetPais(event.target.value)}} required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Codigo Postal</label>
                          <Input 
                           type="number" 
                           name="codigoPostal" value={codigoPostal} onChange={(event)=>{SetCodigoPostal(event.target.value)}} required
                           />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Provoncia</label>
                          <Input
                            type="text"
                            name="provincia" value={provincia} onChange={(event)=>{SetProvincia(event.target.value)}} required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Codigo Pais</label>
                          <Input
                            type="text"
                            name="codigo_telefono" value={codigo_telefono} onChange={(event)=>{SetCodigo_telefono(event.target.value)}} required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Telefono</label>
                          <Input 
                           type="number"
                           name="telefono" value={telefono} onChange={(event)=>{SetTelefono(event.target.value)}} required
                            />
                        </FormGroup>
                        <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Telefono Local</label>
                          <Input 
                           type="number"
                           name="telefonoLocal" value={telefonoLocal} onChange={(event)=>{SetTelefonoLocal(event.target.value)}} required
                            />
                        </FormGroup>
                      </Col>
                      </Col>
                    </Row>
                    <Row>
                    <CardTitle style={{ marginLeft: "18px"}} tag="h5">Redes Sociales</CardTitle>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Twitter</label>
                          <Input
                            type="text"
                            name="twitter" value={twitter} onChange={(event)=>{SetTwitter(event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Facebook</label>
                          <Input
                            type="text"
                            name="facebook" value={facebook} onChange={(event)=>{SetFacebook(event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Instagram</label>
                          <Input
                           type="text" 
                           name="instagram" value={instagram} onChange={(event)=>{SetInstagram(event.target.value)}}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Linkedin</label>
                          <Input
                            type="text"
                            name="linkedin" value={linkedin} onChange={(event)=>{SetLinkedin(event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Skype</label>
                          <Input
                            type="text"
                            value={skype} onChange={(event)=>{SetSkype(event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Tick tock</label>
                          <Input 
                           type="text"
                           name="tiktok"  value={tiktok} onChange={(event)=>{SetTiktok(event.target.value)}}
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Web Personal</label>
                          <Input
                            type="text"
                            name="web"  value={web} onChange={(event)=>{SetWeb(event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Lead Page</label>
                          <Input
                            type="text"
                            name="leadPage"  value={leadPage} onChange={(event)=>{SetLeadPage(event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* {
                  primeraVez ? 
                  ''
                  :
                    <Row>
                    <CardTitle style={{ marginLeft: "18px"}} tag="h5">Seguridad</CardTitle>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Contraseña</label>
                          <Input
                            defaultValue="123456"
                            placeholder="Contraseña"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Repetir Contraseña</label>
                          <Input
                            defaultValue="123456"
                            placeholder="Contraseña"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  } */}
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          ACTUALIZAR
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }

export default Formulario2;
