import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import Main from './components/Main';
import Sub from './components/Sub';
import Advert from './components/Advert';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main>
        <Sub/>
        <Sub/>
        <Sub/>
      </Main>
    </div>
  );
}

export default App;
