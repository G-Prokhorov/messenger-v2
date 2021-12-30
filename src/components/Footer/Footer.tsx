import React from "react";

import './style.scss';
import commonStyle from '../../shared/commonStyle'

import {BsFillGearFill, BsPlusLg, BsThreeDots} from 'react-icons/bs';

export default function Footer() {
    return <footer>
        <nav>
            <BsThreeDots color={commonStyle.pink} size={30}/>
            <BsPlusLg color={commonStyle.pink} size={commonStyle.iconSize}/>
        </nav>
        <nav>
            <BsFillGearFill color={commonStyle.blue} size={commonStyle.iconSize}/>
        </nav>
    </footer>
}
