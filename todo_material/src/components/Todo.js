import * as React from 'react';
import { useState} from 'react';


const Todo = (props) => {
    const { todoList, setTodoList } = props;
    const [todoItem, setTodoItem] = useState('');

    const handelSubmit = (e) =>{
        e.preventDefault();
        setTodoList([...todoList, {
            text: todoItem, 
            id: Math.floor(Math.random()*10000).toString() 
        }]);
        setTodoItem("");
    };

    return(
            <form onSubmit={handelSubmit} 
            >
                <input type="text" onChange={(e)=> setTodoItem(e.target.value)} value={todoItem}/>
                <button variant="outlined" >Save Todo</button>
            </form>
    
    )
}

export default Todo;