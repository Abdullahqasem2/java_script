import React,{useState} from 'react';
import {Link} from 'react-router-dom';
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setconfirm] = useState("");  
    // const [count, setCount] = useState(0);
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirm };
    };
    const nameMessage = () => {
        if(username.length < 2 && username.length !==0){
            return "Lastname must be at least 2 char";
        }else if(username.length >= 2 && username.length !==0){
            return true;
        }else{
            return null;
        }
    }
    const lastMessage = () => {
        if(Lastname.length < 2 && Lastname.length !==0){
            return "Lastname must be at least 2 char";
        }else if(Lastname.length >= 2 && Lastname.length !==0){
            return true;
        }else{
            return null;
        }
    }
    const emailMessage = () => {
        if(email.length < 2 && email.length !==0){
            return "Email must be at least 2 char";
        }else if(email.length >= 2 && email.length !==0){
            return true;
        }else{
            return null;
        }
    }
    const passMessage = () => {
        if(password.length < 8 && password.length !==0){
            return "password must be more than 8";
        }else if(password.length >= 8 && password.length !==0){
            return true;
        }else{
            return null ;
        }
    }
    const confMessage = () => {
        if(password !== confirm && confirm.length !==0 ){
            return "password confirm must be mached";
        }else if(password === confirm && confirm.length !==0){
            return true;
        }else{
            return null;
        }
    }

    const submit = () => {
        if (confMessage() === true && passMessage() === true && nameMessage() === true && lastMessage() === true && emailMessage() === true ) {
            return <input type="submit" value="Create User" /> ;
        }else{
            return null ;
        }
    }

    return(
        <section style={{backgroundColor: "lightblue"}} >
        <h1> More forms </h1>
        <ul>
          
        </ul>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
                <p style={{color: "red"}} >{nameMessage()}</p>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <p style={{color: "red"}} >{lastMessage()}</p>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <p style={{color: "red"}} >{emailMessage()}</p>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <p style={{color: "red"}} >{passMessage()}</p>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setconfirm(e.target.value) } />
            </div>
            <br></br>

            {submit()}

            <p style={{color: "red"}} >{confMessage()}</p>
        </form>
        <p style={{color: "red"}} >Username: {username}</p>
        <p style={{color: "red"}} >Lastname: {Lastname}</p>
        <p style={{color: "red"}} >email: {email}</p>
        <p style={{color: "red"}} >password: {password}</p>
        <p style={{color: "red"}} >confirm: {confirm}</p>

        <h3  style={{color: "blue"}} > Abdullah Qasem</h3>
        <Link to="/" >
        <h1> Hook Form assignment </h1>
        </Link>
        </section>
    );
};
    
export default UserForm;