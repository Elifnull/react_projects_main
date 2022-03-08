import React from "react";

const Tabs = (props) => {
    const {tabArray, activeTab, setActiveTab } = props;
    const tabFunction = (tabIndex) => {
        if (tabIndex === activeTab){
            return "activeTab"
        }
    };



    return(
        <div>
            {tabArray.map((value, index) =>(
            <p style={{
                display: "inline-block",
                margin: "4px",
                border: "2px black solid",
                padding: "4px"
            }} className={tabFunction(index)} key = {index} onClick= {()=>setActiveTab(index)}>{value.name}</p> 
            ))}
        </div>
    );
}

export default Tabs;