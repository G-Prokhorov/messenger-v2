import React from "react";

import './style.scss';
import CustomMessage from "../../containers/CustomMessage/CustomMessage";

export default function RightSidebar() {
    return <>
        <div className='menuUp rightSidebar'></div>
        <div className='rightSidebar rightSidebarMain'>
            <CustomMessage/>
        </div>
    </>
}
