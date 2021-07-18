import React, { useState } from 'react';
import MessageForm from './componant/MessageForm';
import MessageDisplay from './componant/MessageDisplay';
    
    
function App() {
    const [currentmsg, setCurrentMsg] = useState([]);
    
    const groceryList = ( newMessage ) => {
        setCurrentMsg( currentmsg.concat(newMessage ));
    }
    
    return (
        <>
            <MessageForm onNewMessage={ groceryList } />
            <MessageDisplay message={ currentmsg } />
        </>
    );
}
export default App;