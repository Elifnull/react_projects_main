import React, { useState } from "react";

const ColourForm = (props) =>{
    const { objectColour, setObjectColour } = props;
    const [colour, setColour] = useState("");

    const submitColour = (e) => {
        e.preventDefault();
        
        setObjectColour( [ ...objectColour, colour] );
    }

    return(
        <div>
            <forum onSubmit = { submitColour } style={{margin: "25px"}}>
                <div>
                    <label htmlfor="colour">Colour: </label>
                    <input 
                        type="text" 
                        name="color"
                        onChange={ (e) => (setColour(e.target.value)) }
                    />
                    <button style={{margin: "10px"}}>Create Colour</button>
                </div>
            </forum>
        </div>
    );
}


export default ColourForm;
