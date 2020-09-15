import React, { useState } from 'react'
import {
    CContainer,
    CRow
  } from '@coreui/react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { style } from './style'
import icono_tugogo from '../../assets/tu-gogo-icono.png';

// var Link = React.createClass({
//     getInitialState: function(){
//       return {hover: false}
//     },
//     toggleHover: function(){
//       this.setState({hover: !this.state.hover})
//     },
//     render: function() {
//       var linkStyle;
//       if (this.state.hover) {
//         linkStyle = {backgroundColor: 'red'}
//       } else {
//         linkStyle = {backgroundColor: 'blue'}
//       }
//       return(
//         <div>
//           <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
//         </div>
//       )
//     }
// }

function Navbar(){
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={style.fondo}>
            <a className="navbar-brand" href="/">
                <img style={style.imagen} src={icono_tugogo} alt="icono"></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <CRow style={style.centrar}>
            <div style={{marginLeft: "448px"}} className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="nav navbar-nav navbar-center">
                <li className="nav-item">
                    <a className="nav-link" >
                        <div>
                        <i style={style.palabras_navbar} class="fas fa-user-circle"></i>
                        </div>
                    </a>
                </li>
                <li className="nav-item" style={style.navbar_ingresar}>
                    <a className="nav-link" >
                        <i style={style.palabras_navbar} class="fas fa-info-circle"></i>
                    </a>
                </li>
                <li className="nav-item" style={style.navbar_ingresar}>
                    <a className="nav-link" >
                        <i style={style.palabras_navbar} class="fas fa-share-alt"></i>
                    </a>
                </li>
                <li className="nav-item" style={style.navbar_ingresar}>
                    <a className="nav-link" >
                        <i style={style.palabras_navbar} class="fas fa-cog"></i>
                    </a>
                </li>
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
                </ul>
            </div>
            </CRow>
        </nav>
    )
}
export default Navbar