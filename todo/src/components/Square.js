import React from "react";
import './board.css';
import { useState } from "react";

function Square(){
    const [value,setvalue]=useState(null);

    function handleClick(){
        setvalue('X');
        // console.log("clicked");
    }

    return(
        <>
            <button className="square" onClick={handleClick} > {value} </button>
        </>
    )
}   

export default Square