import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from '../src/components/Menu'

import getData from '../src/utils/getData'; 

function App() {
  
  const [infoAirlines, setInfoAirlines] = useState({ airlines: [] }); 

  useEffect(() => {
    getData('http://localhost:3000/data')
    .then(data => setInfoAirlines(data))
    .catch(err => console.log(err));  
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
       {infoAirlines.airlines.map(item =>
            <Menu key={item.id} {...item} />
        )}  
      </header>
    </div>
  );
}

export default App;
