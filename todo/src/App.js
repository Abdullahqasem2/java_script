import React , {useState} from 'react';
import TodoForm from './componants/TodoForm';
import TodoDisplay from './componants/TodoDisplay';
function App() {
  const [currentTap, setcurrentTap] = useState([]);
  const TodoList = (Tap) => {
    setcurrentTap(currentTap.concat(Tap));}
  return (
    <>
        <TodoForm onNewTap={TodoList} />
        <TodoDisplay Taps={currentTap} />
    </>
  );
}
export default App;
