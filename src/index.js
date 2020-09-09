import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Formulario from './componentes/formulario/formulario'
import VistaDatos from './componentes/vista_datos/vista_datos'
import BuscarCard from './componentes/buscar_card/buscar_card'
import Login from './componentes/login/login'
import Registrar from './componentes/registrar/registrar'
// import Vcard from './componentes/Vcard/Vcard'


import { Route } from 'react-router-dom'
import { HashRouter, Switch } from 'react-router-dom'


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <BuscarCard />
      </Route>
      <Route path="/formulario">
        <Formulario />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registrar">
        <Registrar />
      </Route>
      <Route path="/:id">
        <VistaDatos />
      </Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
