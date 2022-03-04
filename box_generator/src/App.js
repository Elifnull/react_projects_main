import './App.css';
import ColourForm from './components/ColourForm';
import ColourBox from './components/ColourBox';
import { useState } from "react";

function App() {
  const [objectColour,setObjectColour] = useState([]);

  return (
    <div className="App">
      <ColourForm objectColour={objectColour} setObjectColour={setObjectColour}/>
      <ColourBox/>
      
    </div>
  );
}

export default App;
