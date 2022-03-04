import React, { useState } from "react";

const Form = (props) => {
    const { colour, setColour } = props;
    const [localColour, setLocalColour] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        
        setColour( [ ...colour, localColour] );
    }

    return(
        <div>
            <form onSubmit = { submitHandler } style={{margin: "25px"}}>
                <div>
                    <label htmlfor="colour">Colour: </label>
                    <input 
                        type="text" 
                        name="color"
                        onChange={ (e) => setLocalColour((e.target.value)) }
                    />
                    <button style={{margin: "10px"}}>Create Colour</button>
                </div>
            </form>
        </div>
    );
}


export default Form;
