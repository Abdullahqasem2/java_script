import react, { useState } from 'react';


const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const [hi, sethi] = useState("");
    const [wid, setwid] = useState("");
const groceryList = [];
    const handleSubmit = (e) => {
    e.preventDefault();
    const ob ={msg, hi, wid};
    groceryList.push(ob);
    props.onNewMessage( groceryList );
};
    return (
        <>
        <form onSubmit={ handleSubmit }>
            <h1>Set divs</h1>
            <input type="text" placeholder="Enter your color here" onChange={ (e) => setMsg(e.target.value) }value={ msg } />
            <input type="text" placeholder="Enter your height here" onChange={ (e) => sethi(e.target.value) }value={ hi } />
            <input type="text" placeholder="Enter your width here" onChange={ (e) => setwid(e.target.value) }value={ wid } />
            <input type="submit" value="Send Message" />
        </form>

        </>
    );
};

export default MessageForm;
