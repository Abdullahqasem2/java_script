import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
           
            <ul>
            {props.message.map( (item, i) => <li key={ i }>{ item }</li>)}
            </ul>
        </>
    );
};
    
export default MessageDisplay;