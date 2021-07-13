import React,{useState} from 'react';
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
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setconfirm(e.target.value) } />
            </div>
        </form>
        <p>Username: {username}</p>
        <p>Lastname: {Lastname}</p>
        <p>email: {email}</p>
        <p>password: {password}</p>
        <p>confirm: {confirm}</p>
        </>
    );
};
    
export default UserForm;