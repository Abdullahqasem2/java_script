import React, { useState } from 'react';
import Form from './componants/Form';
import Display from './componants/Display';

function App() {
  const [taps, settaps] = useState([]);
  const List = (list) => {
    settaps(taps.concat(list));
  }


  return (
    <>
      <Form AllTaps={List} />
      <Display tap={taps} />
    </>
  );
}

export default App;
