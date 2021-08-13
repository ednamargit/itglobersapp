import React from 'react';
import '../styles/components/Title.scss'; 

function Title({ name }) {
  return( 
    <div className="TitleContainer">
      <h1>Hola, bienvenido, sabemos que quieres viajar en un { name }, por favor diligencia el siguiente formulario:</h1>
    </div>
  )
}; 

export default Title; 