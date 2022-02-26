import './App.css';
import Personcard from './components/Personcard';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Personcard firstName="Serge" lastName="Chvorun" Age = {34} hairColour="Black"/>
      <Personcard firstName="Ephraim" lastName="Chvorun" Age = {12} hairColour="Blond"/>
      <br/>
      <br/>
      <Form/>
    </div>
  );
};

export default App;
