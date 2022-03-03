import './App.css';
import ColourForm from './components/ColourForm';
import ColourBox from './components/ColourBox';
import { useState } from "react";

function App() {
  const [] = useState('');

  return (
    <div className="App">
      <ColourForm/>
      <ColourBox/>
      
    </div>
  );
}

export default App;
