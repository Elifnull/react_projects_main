import {
  BrowserRouter,
  Routes,
  Route,
  Link} from "react-router-dom";
import Home from "./components/Home"
import Display from "./components/Display";
import DoubleDisplay from "./components/Double_display";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route exact path="/:value" element={<Display/>}/>
          <Route path="/:word/:colour1/:colour2" element={<DoubleDisplay/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
