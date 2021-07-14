import './App.css';
import UserForm from './components/ClassComponents';
import AsdForm from './components/Asd';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {
  return (
      <center>
    <BrowserRouter>
        <Switch>
        <Route path="/asd" exact component={UserForm} />
        <Route path="/" component={AsdForm} />
        </Switch>
    </BrowserRouter>
      </center>
  );
}
export default App;
