import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Serge"} lastName= {"Chvorun"} age= {33} hairColour= {"Black"}/>
      <PersonCard firstName = {"Billy"} lastName= {"valdin"} age= {23} hairColour= {"Blue"}/>
      <PersonCard firstName = {"Ephriam"} lastName= {"Chvorun"} age= {10} hairColour= {"Blond"}/>
      <PersonCard firstName = {"Elisha"} lastName= {"Chvorun"} age= {19} hairColour= {"Brown"}/>
    </div>
  );
}

export default App;
