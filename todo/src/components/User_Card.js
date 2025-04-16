import React from 'react'
import './User_card.css'
import userimage from '../assets/1.jpg'

function User_Card(props){
  return (
    <div className='container'>
        <img src={userimage} alt="user_image" className="userimage" />
        <h1 className="userName">{props.name}</h1>
        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fuga animi laborum nobis fugit. Saepe repudiandae sapiente sunt animi earum, dolorem alias nemo debitis ullam!</p>


        {/* prop children */}
        <div>
          {props.children}
        </div>
    </div>
  )
}

export default User_Card
