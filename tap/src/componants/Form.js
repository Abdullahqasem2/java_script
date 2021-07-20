import react, { useState } from 'react';

const Form = (props) => {
  const [tap, setTap] = useState("");
  const [tapContant, setTapContant] = useState("");
  const List = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    const ob ={tap, tapContant};
    List.push(ob);
    props.AllTaps(List);
  }
  return(
    <center>
    <form onSubmit={ handleSubmit }>
        <h1>Set Taps</h1>
        <input type="text" placeholder="Enter your Tap here" onChange={ (e) => setTap(e.target.value) }value={ tap } />
        <input type="text" placeholder="Enter your Contant here" onChange={ (e) => setTapContant(e.target.value) }value={ tapContant } />
        <input type="submit" value="Send Message" />
    </form>

    </center>

  );
};
export default Form;
