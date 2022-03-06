import React from "react";
import Advert from "./Advert";
import Sub from "./Sub";
const Main = (props) => {


    return(
            <div style={{
                backgroundColor: "#e06666",
                height: "750px",
                margin: "10px",
                display: "inline-block",
                justifyContent:"space-around",
                width: "69%"
                }}>
                    <div style={{
                        backgroundColor: "black",
                        height: "50%",
                    }}>
                        <Sub/>
                        <Sub/>
                        <Sub/>
                    </div>
            </div>
    );
}

export default Main;