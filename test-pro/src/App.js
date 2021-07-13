import './App.css';
import ClassComponent from './component/ClassComponent';
// import PersonCard from './component/ClassComponent';
function App() {
  return (
    <div>      
      <ClassComponent age={45} name="Doe" hairColor="Black" />
      <ClassComponent age={45} name="John" hairColor="Brown" />
      <ClassComponent age={45} name="Millard" hairColor="Brown" />
      <ClassComponent age={45} name="Smith" hairColor="Brown" />
    </div>  
  );
}
export default App;
