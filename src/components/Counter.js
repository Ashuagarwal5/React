import { useState } from "react";
import './Counter.css'

function Counter(){
    const [count, setCount]=useState(0);
    return(
        <div className="counter-container">
            <h1 id="display">{count } </h1>
            <br /><br />
            <div className="btn" >
                <button id="increment" onClick={()=>{setCount(count+1)}}>increment</button>
                <button id="decrement" onClick={()=>{setCount(count-1)}}>decrement</button>       
            </div>       

        </div>
        
    )   
}

// document.addEventListener('click',function(){
//         const incr= document.getElementById('increment');
//         const decr= document.getElementById('decrement');
//         const display=document.getElementById('display');
//         let count=0;
//         incr.addEventListener('click', fun()){
//             count++;
//             display.textContent=`count= ${count}`;

//         }
// })

export default Counter;
