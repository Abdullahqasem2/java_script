import Welcome from './componants/Welcome';
import String from './componants/String';
import Style from './componants/Style';
import Number from './componants/Number';
import { Router } from '@reach/router';
import React from 'react';
function App() {
  return (
    <div>
    <Router>
      <Welcome path="/home" />
      <String path="/home/:string/:color" />
      <Number path="/home/:int" />
      <Style path="/home/:string" />
    </Router>
    </div>
  );
}

export default App;
