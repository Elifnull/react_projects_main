import './App.css';
import React, {useState} from 'react';
import ColourForm from './components/ColourForm';
import Box from './components/Box';

function App() {
  const [ objectColour, setObjectColour ] = useState([]);

  return(
    <div className="App">
        <h2>Colour Box Generator</h2>
        <ColourForm objectColour={ objectColour } setObjectColour={ setObjectColour }/>
        <Box objectColour={objectColour} setObjectColour={setObjectColour}/>
    </div>
  );
}

export default App;