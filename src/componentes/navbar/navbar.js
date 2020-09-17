import React, { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { style } from './style'
import icono_tugogo from '../../assets/tu-gogo-icono.png';

function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={style.fondo}>
            <a className="navbar-brand" href="/#/buscar">
                <img style={style.imagen} src={icono_tugogo} alt="icono"></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div style={{marginLeft: "515px"}} className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav navbar-nav navbar-center">
                        <li className="nav-item">
                            <a style={style.palabras_navbar} className="nav-link" href="/#/formulario">
                            <i style={style.icono} class="fas fa-id-card"></i>
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a style={style.palabras_navbar} className="nav-link" href="/#/Administrar-Vcard" >
                            <i style={style.icono} class="fas fa-table"></i>
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a style={style.palabras_navbar} className="nav-link" href="/#/login">
                            <i style={style.icono} class="fas fa-sign-out-alt"></i>
                            </a>
                        </li>
                 </ul>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}
            </div>
        </nav>
    )
}
export default Navbar