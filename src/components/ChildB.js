import React, { useContext } from 'react'
// import { UserContext } from '../App'
import ChildC from './ChildC'

function ChildB() {
  // const user =useContext(UserContext)
  return (
    <div>
      <ChildC/>
        {/* <h1>Hello {user.name}</h1>    */}
    </div>
  )
}

export default ChildB
