import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
  const [User, setUser] = useState("");
  const [UserL, setUserL] = useState("");
  const [UserA, setUserA] = useState("");
  const handelSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            name:User,
            lastname:UserL,
            age:UserA
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
  return(
    <form onSubmit={handelSubmit} >
      <p>
        <label>first Name</label>
        <input type="text" onChange={e => {setUser(e.target.value)}}/>
      </p>
      <p>
        <label>last Name</label>
        <input type="text" onChange={e => {setUserL(e.target.value)}}/>
      </p>
      <p>
        <label>age</label>
        <input type="number" onChange={e => {setUserA(e.target.value)}}/>
      </p>
      <input type="submit" value="create" />
    </form>
  );

};
export default Form;
