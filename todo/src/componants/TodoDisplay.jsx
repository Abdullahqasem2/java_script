import React from 'react';
const TodoDisplay = (props) => {
  const List = [];
  for(let j =0; j < props.Taps.length; j++){
    List.push(props.Taps[j]);};
    const Delete = (i) => {
      List.splice(i);
      return List[i];
    };
  return (
    <>
      {List.map((item,i) => <><input type="checkbox"/> <label> {item} </label> <button onClick={(e) => {Delete(i)} } >Delete</button> </>  )}
    </>
  );
};
export default TodoDisplay;
