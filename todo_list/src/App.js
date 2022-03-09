import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { useState} from "react";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoList todoList = {todoList} setTodoList = {setTodoList}/>
      <Todo todoList = {todoList} setTodoList ={setTodoList} />
    </div>
  );
}

export default App;
