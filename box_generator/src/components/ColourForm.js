import React, { useState } from "react";

const ColourForm = (props) =>{
    const {boxColourObj, setBoxColourObj} = props;
    const [boxColour, setBoxColour] = useState('')
    const submitColour = (e) => {
        e.preventDefault();
        
    };

    return(
        <div>
            <Form onSubmit = {submitColour}>
                <div>
                    <label htmlfor="colour">Colour</label>
                    <input type="text" name="colour" onChange={}/>
                </div>

            </Form>
        </div>
        
    );
};


export default ColourForm;
