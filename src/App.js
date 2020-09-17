import React, { useEffect } from 'react';
import './App.css';

/******** COMPONENTES *************** */
import Formulario from './componentes/formulario/formulario'
import VistaDatos from './componentes/vista_datos/vista_datos'
// import BuscarCard from './componentes/buscar_card/buscar_card'
import BuscarVcard from './plantilla/src/views/BuscarPage/buscarVcard'
import LoginPage from './plantilla/src/views/LoginPage/LoginPage'
import RegistrarPage from './plantilla/src/views/RegistrarPage/RegistrarPage'
import ProfilePage from './plantilla/src/views/ProfilePage/ProfilePage'
// import Login from './componentes/login/login'
// import Registrar from './componentes/registrar/registrar'
import CrearUsuario from './componentes/crear-usuarios/crear-usuarios'
import { AuthProvider } from './componentes/Auth/auth'
import Pronto from './componentes/pronto/pronto'
import TodasVcard from './componentes/manejo-vcards/todasVcars'
// import Vcard from './componentes/Vcard/Vcard'

/*********** RUTAS ************************* */
import { Route } from 'react-router-dom'
import { HashRouter, Switch } from 'react-router-dom'


function App() {

  // let id = window.location

  // useEffect(() => {
  //   switch (id){
  //     case '/formulario':
  //       window.location = '/#'
  //       break
  //     case '/login':
  //       window.location = '/#'
  //       break
  //     case '/registrar':
  //       window.location = '/#'
  //       break 
  //     default:
  //       window.location = "#"+id.pathname 
  //       localStorage.setItem('cargo_formulario','false')
  //       console.log(id.pathname)

  //       break
  //   }
  // },[])


  return (
    <div>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Pronto />
            </Route>
            <Route exact path="/buscar">
              <BuscarVcard />
            </Route>
            <Route exact path="/formulario">
              <Formulario />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/registrar">
              <RegistrarPage />
            </Route>
            <Route exact path="/crear-usuarios">
              <CrearUsuario />
            </Route>
            <Route exact path="/Administrar-Vcard">
              <TodasVcard />
            </Route>
            <Route exact path="/:id">
              <ProfilePage />
            </Route>
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
