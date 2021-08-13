import React from 'react';
import '../styles/components/Menu.scss'; 

function Menu({ id, name, handleClick }) {
  return( 
    <li onClick={handleClick} id={id} name={name} className="menu-item">{name}</li>
  )
}; 

export default Menu; 