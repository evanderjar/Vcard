import React, { useState } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { style } from './style'

function Slidevar(){
    return(
    <div style={style.sidenav}>
        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span style={style.palabras_navbar}>Buscar Vcard</span> 
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a className="nav-link" href="">
                                <span style={style.palabras_navbar}>Ingresar</span> 
                            </a>
                        </li>
                        <li className="nav-item" style={style.navbar_ingresar}>
                            <a className="nav-link" href="">
                                <span style={style.palabras_navbar}>Ingresar</span> 
                            </a>
                        </li>
            </ul>
    </div>
    )
}

export default Slidevar