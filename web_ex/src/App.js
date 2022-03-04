import logo from './logo.svg';
import './App.css';
import Header from ".components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main>
        <Sub/>
        <Sub/>
        <Sub/>
        <Advert/>
      </Main>
    </div>
  );
}

export default App;
