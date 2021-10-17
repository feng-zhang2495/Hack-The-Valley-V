import { useState } from "react";
import axios from 'axios';
import React from "react";
import '../stylesheets/Signup.css';
import BLOODD from "../assets/BLOODD.png";





function Signup() {
  const [inputs, setInputs] = useState({});
  const [currentValue, setCurrentValue] = useState(2);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };


  const selectChange = async (event) => {
    setCurrentValue(event.target.value)
  };

  



  
  //POSTING TO BACKEND
  const handleSubmit = async (event) => {
    event.preventDefault();
    inputs.Bloodtype = currentValue;
    

    let response = await axios.post('http://localhost:3001/info', inputs)
    .then(function (response) {
        console.log("THIS IS A RESPONSE" + response.data)
        alert(response.data)
      });
  };
  
  
  return (
    <div className='bg'>
    <form className='formbg' onSubmit={handleSubmit} >
        <div className='container'>
        <h1 className='pad'>Sign up</h1>
        <p className='pad'>Sign up for an email subscription to our website</p>
        <hr className='paddown'>
        </hr>
      <label>Enter your name:
      
      <input className='dropbox'
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your email:
        <input className='dropbox'
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        
        </label>

        
        <label>Select your blood type:
        <select className='dropbox' id = "dropdown" onChange={selectChange}>
          <option value="I don't know">I don't know</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B-</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        </label>


            <input className='dropbox' type="submit" /> 
        </div>
    </form>
    {/* <img className='logo1' src={BLOODD} alt='blood.png' /> */}
    </div>
  )
};




export default Signup





