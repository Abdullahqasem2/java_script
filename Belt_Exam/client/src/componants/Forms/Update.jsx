import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from './Form';
const Update = (props) => {
  const [User, setUser] = useState();
  const [errors, setErrors] = useState([]);

  const updateUser = User => {
        axios.put('http://localhost:8000/api/people/' + props.id, User)
            .then(res => console.log(res))
            .then(res => navigate('/show'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
  return(
    <div>
    <Form
      onSubmitProp={updateUser}
      initialFirstName={props.firstName}
      initialLastName={props.lastName}
      initialAge={props.age}
      />
      {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
      </div>
  );
};
export default Update;
