import React, { useState } from "react";

const ColourForm = (props) =>{
    const {boxColourObj, setBoxColourObj} = props;
    const [boxColour, setBoxColour] = useState('');
    const submitColour = (event) => {
        event.preventDefault();
        
    };

    return(
        <div>
            <forum onSubmit = {submitColour}>
                <div>
                    <br/>
                    <br/>
                    <label htmlfor="colour">Colour: </label>
                    <input type="text" name="colour" onChange={(e) => setBoxColour(e.target.value)}/>
                    <button>Create</button>
                </div>
            </forum>
        </div>
    );
};


export default ColourForm;