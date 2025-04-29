import React, { useState } from 'react'
import './Toggle.css'

function Toggle() {

  const [IsOn,setIsOn]=useState(true)

  function handleToggleClick(){
    setIsOn(!IsOn)
  }


  return (
    <div>
        <div className={`toggle-switch `} style={{backgroundColor:IsOn?"green":"red"}} onClick={handleToggleClick}>
            <div className={`switch ${IsOn?"on":"off"}`}>
              <span className="switch-state">{ IsOn ? "On":"Off"}</span>
            </div>
            
        </div>
    </div>
  )
}

export default Toggle
