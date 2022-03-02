import React, { useState } from "react";

const ColourForm = (props) =>{
    const {boxColourObj, setBoxColourObj} = props;
    const [boxColour, setBoxColour] = useState('');
    const submitColour = (event) => {
        event.preventDefault();
        

    };

    return(
        <div>
            <Form onSubmit = {submitColour}>
                <div>
                    <label htmlfor="colour">Colour</label>
                    <input type="text" name="colour" onChange={(e) => setBoxColour(e.target.value)}/>
                </div>
                <div>
                    <button type=""
                </div>
            </Form>
        </div>
    );
};


export default ColourForm;
