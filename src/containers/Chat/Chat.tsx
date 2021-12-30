import React from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import Textfield from "./components/Textfield";

import "./style/style.scss";

export default function Chat() {
    return <>
        <Header/>
        <Sidebar/>
        <Messages/>
        <Textfield/>
    </>
}
