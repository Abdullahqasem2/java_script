import React, {useState} from 'react';
import { Router } from '@reach/router'
import Form from './componants/Form';
import Display from './componants/Display';
import DisplayP from './componants/DisplayP';
function App() {
  return (
    <div>
    <Form />
    <Router>
      <Display path="/people/:id" />
      <DisplayP path="/planet/:id" />
      </Router>
    </div>
  );
}

export default App;
