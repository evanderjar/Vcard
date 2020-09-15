import React, { Fragment } from 'react'

class Icon {
    constructor(viewBox, svg) {
      this.viewBox = viewBox
      this.svg = <Fragment>{svg}</Fragment>
    }
  }

  const svgs = {
	// Para este ejemplo usaremos tres íconos de redes sociales
	'youtube': new Icon(),
  'facebook': new Icon("0 0 108.39 108.39",<path class="cls-1" d="M108.39,54.2A54.2,54.2,0,1,1,54.19,0,54.2,54.2,0,0,1,108.39,54.2Z"/>),
  'facebook2': new Icon("0 0 108.39 108.39", <path class="cls-2" d="M59,41.36V36.22c0-2.5,1.67-3.08,2.83-3.08H69v-11l-9.92,0c-11,0-13.51,8.2-13.51,13.46v5.8H39.21V54.2h6.42V86.29H58.47V54.2H68l.46-5.05.71-7.79Z"/>),
  'twitter': new Icon(),
	// Muy importante agregar un valor por default que regrese null
	// para evitar problemas por si llegamos a escribir mal el nombre de un ícono
	'default': null
}
export default svgs