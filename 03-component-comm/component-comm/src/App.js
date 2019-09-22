import React, {useState} from 'react';
import './App.css';
import SendMessage from './components/SendMessage';
import RecieveMessage from './components/RecieveMessage';
import MessageContext from './message.context';

function App() {
  const [message, setMessage] = useState("initial Message from context");

  return (
    <div className="App">

      <MessageContext.Provider value={ {message, setMessage} }>
        <SendMessage setMessageCB={setMessage} />

        <RecieveMessage messageFromSend={message} />
      </MessageContext.Provider>
      
    </div>
  );
}

export default App;
