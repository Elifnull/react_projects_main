import { useState} from "react";
import Todo from './components/Todo';
import View from "./components/View";
import Box from '@mui/material/Box';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
        <Todo todoList = {todoList} setTodoList = {setTodoList} />
        <View todoList = {todoList} setTodoList = {setTodoList}/>
    </div>
  );
}

export default App;
