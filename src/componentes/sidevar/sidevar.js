import React, { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { style } from './style'

function Slidevar(){
    return(
    <div style={style.sidenav}>
        <div style={{marginTop: "280px"}}>
        <ul className="nav navbar-nav navbar-center">
                        <li className="nav-item">
                            <a style={style.icono2} className="nav-link" >
                            <i style={style.icono} class="fas fa-id-card"></i>
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a style={style.icono2} className="nav-link" >
                            <i style={style.icono} class="fas fa-question-circle"></i>
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a style={style.icono2} className="nav-link">
                            <i style={style.icono} class="fas fa-sign-out-alt"></i>
                            </a>
                        </li>
            </ul>
            </div>
    </div>
    )
}

export default Slidevar