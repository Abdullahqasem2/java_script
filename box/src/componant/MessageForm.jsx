import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
const groceryList = [];
    const handleSubmit = (e) => {
    e.preventDefault();
    groceryList.push(msg);
    props.onNewMessage( groceryList );
    
};
    
    

    return (
        <>
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="2"cols="50"placeholder="Enter your message here" onChange={ (e) => setMsg(e.target.value) }value={ msg }>
            </textarea>
            <input type="submit" value="Send Message" />
        </form>
        
        </>
    );
};
    
export default MessageForm;