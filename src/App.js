import React from 'react';
import './App.css';
import Chat from "./components/Chat";
import JoinChat from "./middleware/joinChat";


function App() {
  return (
    <div className="App">
      <Chat />
      {/*<JoinChat />*/}
    </div>
  );
}

export default App;
