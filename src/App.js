import React, { useState, useEffect } from 'react';
import './styles/components/App.scss'; 
import Menu from './components/Menu';
import Title from './components/Title';
import Form from './components/Form.jsx'

import getData from '../src/utils/getData'; 

function App() {
  
  const [infoAirlines, setInfoAirlines] = useState({ airlines: [] }); 
  const [name, setName] = useState("vuelo"); 
  
  function getSiblings(e) {
    let siblings = []; 
    if(!e.parentNode) {
        return siblings;
    }
    let sibling  = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
  }

  function handleClick(event) {
    let nameItem = event.target.getAttribute("name");
    setName(nameItem); 
    let siblings = getSiblings(event.target);
    event.target.style.backgroundColor="#00008B";
    for (let index = 0; index < siblings.length; index++) {
      const element = siblings[index];
      element.style.backgroundColor = "hsl(217, 71%, 45%)"; 
    }
  }

  useEffect(() => {
    getData('http://localhost:3000/data')
    .then(data => setInfoAirlines(data))
    .catch(err => console.log(err));  
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
      <ul className="menu-list">
        {infoAirlines.airlines.map(item =>
            <Menu key={item.id} {...item} handleClick={handleClick} />
        )}  
       </ul>
      </header>
      <Title name={name}></Title>
      <Form />
    </div>
  );
}

export default App;
