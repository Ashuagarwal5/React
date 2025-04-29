import React, {  useEffect, useState } from 'react'

function UseEffect() {

    const [count,setCount] = useState(0)

    function addCount(){
        setCount(count+1)
    }

    function removeCount(){
       if(count>0) setCount(count-1)
    }
    // it will run on every renders 
    // useEffect(
    //     ()=>{
    //         alert('hii')
    //     }
    // )

    //it will run only 1 time 
    // useEffect(()=>{
    //         alert("call only one time")
    //     },[]
    // )


    // it renders when count is updated
    // useEffect(()=>{
    //         alert("it renders when count is updated")
    //     },[count]
    // )

    // it has cleaning function 
    useEffect(  ()=>{
            alert("it is clicked") //first
            return ()=>{alert("effect is unmounted")} //cleaning function
        },[count] //dependencies OR Entity
    ) //
    
    

    return (
        <div style={{backgroundColor:'pink', display:'flex',flexDirection:'column',height:'100vh', alignItems:'center',justifyContent:'center'} } >
            <p >Total Count= {count}</p>
            <button onClick={addCount} >Add Me</button><br />
            <button onClick={removeCount}>Remove me</button>
        </div>
    )
}

export default UseEffect
