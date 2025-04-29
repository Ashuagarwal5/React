import React from 'react'

function handleChildClick(event){
    event.stopPropagation();
    alert("child clicked");
}
function handleParentClick(event){
    event.stopPropagation();
    alert("parent is also clicked")
}
function handleGrandClick(event){
    event.stopPropagation();
    alert("Grand is also clicked")
}

function Event_propogation() {
  return (
    <div>
        <div style={{backgroundColor:"lightpink", width:"300px", height:"200px"}} onClick={handleGrandClick}>

            <div style={{ backgroundColor:"lightyellow", width:"200px", 
            height:"100px"
            }} onClick={handleParentClick}
            >

                <div style={{backgroundColor:"lightblue", width:"100px", height:"50px"}}  onClick={handleChildClick}>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event_propogation
