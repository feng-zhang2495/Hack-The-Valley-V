import { useState } from "react";
import axios from 'axios';

function Signup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  //POSTING TO BACKEND
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.email);

    axios
      .post('http://localhost:3001/info', inputs)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default Signup



{/* <select>
                <option value="I don't know">I don't know</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option selected value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B-</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select> */}