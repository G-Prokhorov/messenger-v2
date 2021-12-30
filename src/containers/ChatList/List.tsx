import React from "react";

import "./style.scss";

import Chat from "./Chats/Chat";

export default function ChatList() {
    const arr = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];

    return <div className='list'>
        {arr.map(() => <Chat/>)}
        </div>
}
