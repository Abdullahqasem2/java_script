import React from 'react';
import { navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Delete = props => {

const deleted = (e) => {
    e.preventDefault();
    console.log("asd");
    axios.delete('http://localhost:8000/api/people/' + props.id)
        .then(res => {
        props.rerender()
        })
  }
  return(


    <Button
    style={{backgroundColor: 'red', color: '#FFFFFF'}}
    onClick={e => deleted(e)}
    >Delete</Button>
  );
};
export default Delete;
