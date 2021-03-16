import React, { useEffect, useState } from 'react';

// Import Components
import SidebarFilters from "./sidebarFilters";

const Sidebar = (props) => {

    let {setResultToShow, sidebarCoordinates} = props;
    
    const [toSetPositionFixed, setToSetPositionFixed] = useState("false");

    useEffect(() => {
        if(sidebarCoordinates >= 290) {
            setToSetPositionFixed(true)
        }else{
            setToSetPositionFixed(false);
        }
    }, [sidebarCoordinates])

    return (
        <div className="sidebar-wrapper">
            <div  className={`${toSetPositionFixed && "sidebar-fixed-position"} sidebar`}>
                <SidebarFilters setResultToShow={setResultToShow}/>
            </div>
        </div>
    )

    
}

export default Sidebar;