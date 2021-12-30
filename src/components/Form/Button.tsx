import React from "react";

import './style.scss';

export default function Button(props: any) {
    const text = props.text ?? "Submit";

    return <button className='styledBth' {...props}>{text}</button>
}
