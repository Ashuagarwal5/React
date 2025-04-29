import React from 'react'
import { useState } from "react";

function Form() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         if ( !formData.name || !formData.age || !formData.city || !formData.email || !formData.address){
          return;
        }else{
            setData(prev => [...prev, formData]);
            setFormData({ name: "", age: "", city: "" ,email:"",address:""});
        } 
    };

    return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit} style={{
        width:"300px",
        backgroundColor:"lightblue",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:"5px",
        boxShadow:"0 0 5px"
        
        }} >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="mail"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">
          Add
        </button>
      </form>

      <h3>User Table</h3>
      <table style={{
        border:"2px solid",
        width:"300px",
        borderCollapse: "collapse",
        borderRight:"2"

      }}>
        <thead >
          <tr style={{borderRight:"2"}}>
            <th style={{borderRight:"2"}}> Name </th>
            <th style={{borderRight:"2"}}> Age</th>
            <th>City</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Form;
