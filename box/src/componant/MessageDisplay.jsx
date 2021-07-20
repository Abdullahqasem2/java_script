import react, { useState } from 'react';


const MessageDisplay = (props) => {
    return (
        <>
            <h1>divs</h1>
            {props.message.map( (item) => <div style={{background:item.msg, width:item.wid+"px",height:item.hi+"px" }}  ></div>)}
        </>
    );
};
export default MessageDisplay;
