import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [ objectColourList, setObjectColourList ] = useState([]);

  return(
    <div className="App">
        <h2>Colour Box Generator</h2>
        <Form colour={ objectColourList } setColour={ setObjectColourList } />
        <Box colour={ objectColourList } />
    </div>
  );
}

export default App;