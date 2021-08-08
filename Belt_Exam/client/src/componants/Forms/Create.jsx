import React,{useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from './Form';

const Create = props => {

  const [User, setUser] = useState([]);
  const [errors, setErrors] = useState([]);

    const createUser = User => {
        axios.post('http://localhost:8000/api/people', User)
            .then(res=>{console.log(res.data);
            })
            .then(res => navigate('/show'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
  return(
    <div>
    <Form onSubmitProp={createUser} initialFirstName="" initialLastName="" initialAge= "" />
    {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
    </div>
  );
};
export default Create;
