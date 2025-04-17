import React, { useState } from 'react'

function EventHandler() {
    const[person,setPerson]=useState({
        name: "john",
        art:{
            title: "john Wick",
            image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        }
        
    });
    function HandleName(e){
        setPerson({
            ...person,
            name:e.target.value
        });
    }
    function HandleTitle(e){
        setPerson({
            ...person,
            art: {
              ...person.art,
              title: e.target.value
            }
          });
    }
    function HandleImage(e){
        setPerson({
            ...person,
            art:{
                ...person.art,
                image: e.target.value
            }
        })
    }
  return (
    <div>
        Name: <input type="text" value={person.name} onChange={HandleName} /><br /><br />
        Title: <input type="text" value={person.art.title} onChange={HandleTitle}/><br /><br />
        Image: <input value= {person.art.image} onChange={HandleImage}/> <br /><br />

        <p>
            {person.name + " by "}
            {person.art.title} <br /> <br /><br />
            <img src={person.art.image} alt="user"  width={300}/>
            {/* {`${person.name} <br /> by <br />${person.art.title}`} */}
        </p>
    </div>
  )
}

export default EventHandler
