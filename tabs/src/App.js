import Tabs from "./components/Tabs";
import Display from "./components/Display";
import { useState} from "react";
import './App.css';

function App() {
  const {tab1, tab2, tab3} = tablist([
    {name: "Tab 1", content: "This is Tab 1", colour: "Black"},
    {name: "Tab 2", content: "This is Tab 2", colour: "Black"},
    {name: "Tab 3", content: "This is Tab 3", colour: "Black"}
  ]);
  const [activeTab, setActiveTab] = useState(0);

  
  return (
    <div className="App">
      <Tabs/>
      <Display/>
    </div>
  );
}

export default App;
