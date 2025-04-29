import React, { useEffect, useState } from 'react'

function SetTimer() {
    const[seconds,setSeconds]=useState(0)
    useEffect(()=>{
            const intervalId =setInterval(() => {
                console.log("hook is renderd")
                setSeconds(prevSecond=>prevSecond+1);
            }, 1000);
            return ()=>{
                console.log("hook is unmounted")
                clearInterval(intervalId)
            };
        },[]
    )

    return (
        <div style={{backgroundColor:'pink', display:'flex',flexDirection:'column',height:'100vh', alignItems:'center',justifyContent:'center'}}>
            <h2>timer: {seconds}</h2>
        </div>
    )
}

export default SetTimer