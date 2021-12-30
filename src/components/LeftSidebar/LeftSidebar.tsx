import React from "react";

import './style.scss';
import ChatList from "../../containers/ChatList/List";

export default function LeftSidebar() {
    return <>
        <div className='menuUp leftSidebar'></div>
        <div className='leftSidebar'>
            <ChatList/>
        </div>
    </>
}
