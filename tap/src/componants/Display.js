import react, { useState } from 'react';



const Display = (props) => {
  const [msg, setMsg] = useState("");


    return (
        <center>
            <h1>taps</h1>
            <div>
            {props.tap.map( (item) => <button onClick={(e) => setMsg(item.tapContant) } >{item.tap} </button>)}
            </div>
            <br/>
            {msg}
        </center>
    );
};
export default Display;
