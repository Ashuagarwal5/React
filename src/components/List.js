import React from 'react'

function List() {
    const arr=["5",5,"as","we"]
    const data= arr.map(num => <h2>{num}</h2> )
    return (
    <div>
        {
            data
        }
    </div>
  )
}

export default List
