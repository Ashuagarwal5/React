import React, { useContext } from 'react'
import { UserContext, ChangeTheme } from '../App'

function ChildC() {
    const user =useContext(UserContext)
    const {theme,setTheme} = useContext(ChangeTheme)
    function handleClick(){
        if(theme==='light'){
            setTheme('Dark')
        }
        else{
            setTheme('light') 
        }
    }

  return (
    <div>
      <h1>Hello {user.age}! You are {user.age} years old.</h1>
      <button onClick={handleClick} >Change Theme</button>
    </div>
  )
}

export default ChildC
