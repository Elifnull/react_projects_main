import React, { usestate } from "react";

const Personcard = (props) => {
    const {firstName, lastName, Age, hairColour} = props;
    const [uAge, setuAge] = usestate(Age);
    const ageClick = () => {
        setuAge( uAge + 1);
    };
    
    return
    <div>
        <h2 className="titleName">{lastName}, {firstName}</h2>
        <p className="titledata">Age: {uAge}</p>
        <p className="titledata">Hair Colour: {hairColour}</p>
        <br></br>
        <button onClick={ ageClick } >Birthday button for {firstName}</button>
    </div>
};

export default Personcard;