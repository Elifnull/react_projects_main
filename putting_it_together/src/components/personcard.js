import React, { usestate } from "react";

const Personcard = (props) => {
    const {firstName, lastName, Age, hairColour} = props;
    const [uAge, setuAge] = usestate(Age);
    const handleClick = () => {
        setuAge()
    };
    return
    <div>
        <h2 className="titleName">{lastName}, {firstName}</h2>
        <p className="titledata">Age: {uAge}</p>
        <p className="titledata">Hair Colour: {hairColour}</p>
        <br></br>
        <button onClick={} >Birthday button for {firstName}</button>
    </div>
};