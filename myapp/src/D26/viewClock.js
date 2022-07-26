import React from "react";
import Clock from './Clock'
let times = () => {
    return setInterval(() => {
        <Clock></Clock>
    }, 1000);}

export default times;
