import React, { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { style } from './style'

function Slidevar(){
    return(
    <div style={style.sidenav}>
        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a style={style.icono2} className="nav-link" href="#">
                            <i style={style.icono} class="fas fa-id-card"></i> <span style={style.palabras_navbar}>Tarjeta</span> 
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a style={style.icono2} className="nav-link" href="#">
                            <i style={style.icono} class="fas fa-question-circle"></i><span style={style.palabras_navbar}>Ayuda</span> 
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a style={style.icono2} className="nav-link" href="">
                            <i style={style.icono} class="fas fa-sign-out-alt"></i><span style={style.palabras_navbar}>Cerrar Sesion</span> 
                            </a>
                        </li>
            </ul>
    </div>
    )
}

export default Slidevar