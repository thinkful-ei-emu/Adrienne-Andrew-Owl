import React from 'react';
import '../styles/App.css';
import ParticipantList from './ParticipantList';
import ChatLog from './ChatLog';

function App(props) {
  return (
    <div className="App">
      <ParticipantList
        participants={props.participants}
        />
    </div>
  );
}

export default App;