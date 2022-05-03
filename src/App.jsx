import React, { useState, useEffect } from 'react';
//import './App.css';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: "I'm BOT",
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = (value) => {
    setMessages([
      ...messages,
      {
        author: AUTHOR.USER,
        value,
      },
    ]);
  };

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
