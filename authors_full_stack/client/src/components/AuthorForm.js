import React,{useState, useEffect} from 'react'
import {navigate} from '@reach/router';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import ButtonGroup  from '@material-ui/core/ButtonGroup';
import axios from 'axios';

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [notFoundId, setNotFoundId] = useState(false);
    const [errors, setErrors] = useState();

    useEffect(() => {
      if (props.id) {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => setName(res.data.name))
        .catch(err => setNotFoundId(true));
      }

    }, [props.id])

    const saveAuthor = (e) => {
      if (!props.id) {
        axios.post('http://localhost:8000/api/authors', {name})
        .then(author => navigate("/authors"))
        .catch(err => {
          setErrors(err.response.data.errors);
        });
      }
      else {
        axios.put(`http://localhost:8000/api/authors/${props.id}`, {name})
        .then(author => navigate("/authors"))
        .catch(err => {
          setErrors(err.response.data.errors);
        });

      }

    };

    return (
        <>
        { notFoundId ?
        <FormGroup style={{width:"50%", margin:"0 auto"}}>
          <h3>Wrong Id </h3>
         <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
         <Button  variant="contained" onClick={(e) => navigate("/authors/new")}>Add New Author</Button>
         </FormGroup>
        :
        <FormGroup style={{width:"50%", margin:"0 auto"}}>
            <FormControl>
              <InputLabel htmlFor="name">Author Name</InputLabel>
              <Input id="name" value={name} onChange={e => setName(e.target.value)}  />
              <FormHelperText >{errors? errors.name.message: ""}</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="nationality">Nationality</InputLabel>
              <Input />
              <FormHelperText ></FormHelperText>
            </FormControl>
            <ButtonGroup >
                <Button onClick={(e) => navigate("/authors")}>Cancel</Button>
                <Button onClick={saveAuthor}>Create / Update</Button>
            </ButtonGroup>
          </FormGroup>
        }
        </>
    )
}

export default AuthorForm
