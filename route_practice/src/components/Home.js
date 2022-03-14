import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"


const Home = (props) => {
    const {value} = useParams();

    return(
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

export default Home;