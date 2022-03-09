import React from "react";

const TodoList = (props) => {


    return(
        <div>
            <form>
                <input className= "m-3" type="text" placeholder="What do you want to do?"/>
                <button style={{
                    color: "black",
                    backgroundColor: "gray",
                    padding: "2px"
                }}>Add</button>
            </form>
        </div>
    )
}

export default TodoList;