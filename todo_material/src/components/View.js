import React from "react";

const View = (props) => {
    const { todoList, setTodoList } = props;
    const colourfundtion = (index) => {
        if( index %2 === 0)
            return "#FFD000"
        else
            return "#00AF80"
    };
    const deleteTodo = (todoId) => {
        return setTodoList(todoList.filter((value,index) => value.id !== todoId))
    };

    const completedTodo = (value) => {
        value.complete = !value.complete
        setTodoList([...todoList])
    };
    const completeTodoDec = (value) => {
        if (value.complete){
            return "line-through"
        }
    }

    return(
        <div>
            {todoList.map((value, index)=>{
                return(
                    <div key={index} style={{
                        backgroundColor: colourfundtion(index),
                        color: "black",
                        textDecoration: completeTodoDec(value),
                        width: "24%",
                        marginTop: "1%",
                        justifyContent: "space-between",
                        paddingLeft: "1%",

                    }} ><h2 style={{ }}>{value.text}</h2>
                    <input type="checkbox" onClick={()=> completedTodo(value)}></input>
                    <button onClick={() => deleteTodo(value.id)}>delete</button>

                    </div>
                )
            })}
            <button style={{
                marginTop: "1%",
                display: "flex"
            }} onClick={()=>{setTodoList([])}}>Clear Todo</button>
        </div>
    )
}

export default View;