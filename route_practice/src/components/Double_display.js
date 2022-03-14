import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"


const DoubleDisplay = (props) => {
    const {word, colour1, colour2} = useParams();

    return(
        <div>
            <div style={{backgroundColor: `${colour1}`}}>
            {!isNaN(word)? 
            <h2 style={{color: `${colour2}`}}>The number is {word}</h2>
            :<h2 style={{color: `${colour2}`}}>The Word is {word}</h2>
        }
        </div>
        </div>
    )
}

export default DoubleDisplay;