import React from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColour} = props;
    return(
        <div className="personDiv">
            <ul className="personCard">
            <li> {lastName}, {firstName} </li>
            <li> Age: {age}</li>
            <li> Hair Colour: {hairColour}</li>
            </ul>
        </div>
    )
};

export default PersonCard;