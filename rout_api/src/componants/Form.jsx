import React, {useState} from 'react';
import { navigate } from '@reach/router';
const Form = (props) => {
  const [Api, setApi] = useState("people");
  const [Id, setId] = useState();


  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/${Api}/${Id}`);
  }


  return(
    <center>
      <h1>Search Form</h1>
      <form onSubmit={handelSubmit} >
        <select onChange={(e) => {setApi(e.target.value)}} >
          <option value="people">Peopel</option>
          <option value="planet">planets</option>
        </select>
        <input type="number" onChange={(e) => {setId(e.target.value)}} />
          <input type="submit" value="search" />
      </form>
    </center>
  );

};
export default Form;
