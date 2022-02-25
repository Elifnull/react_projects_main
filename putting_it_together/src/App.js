import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <Personcard firstName="Serge" lastName="Chvorun" Age = {34} hairColour="Black"/>
      <Personcard firstName="Ephraim" lastName="Chvorun" Age = {12} hairColour="Blond"/>
    </div>
  );
};

export default App;
