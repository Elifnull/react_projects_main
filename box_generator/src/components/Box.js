import React from "react";

const Box = (props) => {
    const {colour} = props;
    
    return(
        <div>
            {
            colour.map((value, index) => (
                <div key={index} style={{
                    display: "inline-flex",
                    margin: "5px",
                    height: "20px",
                    width: "20px",
                    backgroundColor: value
                }}>
                </div>))}
        </div>
    );
}


export default Box;
