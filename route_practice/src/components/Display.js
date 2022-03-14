import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"


const Display = (props) => {
    const {value} = useParams();

    return(
        <div>
            {!isNaN(value)? 
            <h2>The number is {value}</h2>
            :<h2>The Word is {value}</h2>
        }
        </div>
    )
}

export default Display;