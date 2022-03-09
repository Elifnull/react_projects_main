import Todo from "./components/Todo"
import { useState} from "react";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Todo todoList = {todoList} setTodoList ={setTodoList} />
    </div>
  );
}

export default App;
