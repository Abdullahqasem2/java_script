import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
const Test = (props) =>{
  const [User, setUser] = useState("");
  const [UserL, setUserL] = useState("");
  const [UserA, setUserA] = useState("");
  const id = props.id;
  const handelSubmit = e => {
        e.preventDefault(props);
        axios.put('http://localhost:8000/api/users/update/'+id, {
            name:User,
            lastname:UserL,
            age:UserA
        })
            .then(res=>console.log(res))
            .then(res => navigate('/'))
            .catch(err=>console.log(err))
    }
  return(
    <form onSubmit={handelSubmit} >
      <p>
        <label>first Name</label>
        <input type="text" onChange={e => {setUser(e.target.value)}} value={props.name} />
      </p>
      <p>
        <label>last Name</label>
        <input type="text" onChange={e => {setUserL(e.target.value)}}/>
      </p>
      <p>
        <label>age</label>
        <input type="number" onChange={e => {setUserA(e.target.value)}}/>
      </p>
      <input type="submit" value="Update" />
      {props.name}
    </form>
  );
};
export default Test;
