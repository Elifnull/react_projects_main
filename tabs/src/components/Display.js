import React from "react";

const Display = (props) => {
    const {displayContent} = props;



    return(
        <div>
            {displayContent}
        </div>
    );
}

export default Display;