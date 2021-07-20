import React, {useState} from 'react';
const TodoForm = (props) => {
  const [li, setli] = useState("");
  const TodoList = [];
  const handelSubmit = (e) => {
    e.preventDefault();
    TodoList.push(li);
    props.onNewTap(TodoList);}
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handelSubmit} >
        <input type="text" onChange={(e) => { setli(e.target.value)  } }value={li} />
        <input type="submit" value="set Todo Tap" />
      </form>
    </>
  );
};
export default TodoForm;
