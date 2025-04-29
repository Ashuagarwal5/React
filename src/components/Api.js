import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import axios from 'axios'

function Api() {
    const [data,setData]=useState({})

    // useEffect(()=>{
    //     fatch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((res)=>{
    //         return (res.json());
    //     })
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // })

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    // useEffect(()=>{
    //     axios.post('https://jsonplaceholder.typicode.com/posts', {
    //         title: 'New Post',
    //         body: 'Content of the post',
    //         userId: 1
    //     })
    //     .then(response => {
    //       console.log(response.data);
    //       setData(response.data)
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },[])

  return (
    <div>
        <h1> api Data</h1>
        <h2>title is: {data.title}</h2>
        <h2>id is: {data.id}</h2>
    </div>
  )
}

export default Api
