import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const Display = (props) => {


  return(
    <div>
    {props.user.map((person, idx)=>{return <div><p key={idx}>{person.name}, {person.lastname}, {person.age}</p> <Link to = {"/show/"+person._id+"/"+person.name} >{person._id}</Link> <Link to = {"/delete/"+person._id+"/"+person.name} >Delete form</Link>  </div>})}
    </div>
  );
};
export default Display;
