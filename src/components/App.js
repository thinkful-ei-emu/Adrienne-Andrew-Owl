import React from 'react';

import '../styles/App.css';
import '../styles/ParticipantList.css';

import ParticipantList from './ParticipantList';
import ChatEvents from './ChatEvents';
import Stage from './Stage';

function App(props) {
  return (
    <div className="App">
      <ParticipantList
        participants={props.participants}
      />
      <hr />
      <ChatEvents
        participants={props.participants}
        chatEvents={props.chatEvents}
      />
      <hr />
      <Stage 
        participants={props.participants}
      />
    </div>
  );
}

export default App;