import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { navigate,Link } from '@reach/router';

const ShowOne = props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
        <tr>
          <th>First name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        <tr>
            <td> {person.firstName}</td>
            <td> {person.lastName}</td>
            <td> {person.age}</td>
            <td><Link to={"/edit/"+props.id+"/"+person.firstName+"/"+person.lastName+"/"+person.age}><Button style={{backgroundColor: 'blue', color: '#FFFFFF'}}
            >Edit</Button></Link></td>
        </tr>
        </div>
    )
}
export default ShowOne;
