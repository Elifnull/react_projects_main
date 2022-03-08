import React from "react";

const Tabs = (props) => {
    const {tabArray, activeTab, setActiveTab } = props;




    return(
        <div>
            {tabArray.map((value, index) =>(
            <p>{value.name}</p> 
            ))}
        </div>
    );
}

export default Tabs;