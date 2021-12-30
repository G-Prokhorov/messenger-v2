import React from 'react';

import '../shared/base.scss';
import './global.scss';

import LeftSidebar from "./LeftSidebar/LeftSidebar";
import Main from "./Main/Main";
import RightSidebar from "./RightSidebar/RightSidebar";
import Footer from "./Footer/Footer";

export default function App()
{
    return <div className="glass app">
        <LeftSidebar/>
        <Main/>
        <RightSidebar/>
        <Footer/>
    </div>
}
