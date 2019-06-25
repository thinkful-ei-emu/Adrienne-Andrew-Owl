import React from 'react';
import Participant from './Participant';

export default function Stage(props) {

  if (!props.participants) {
    return (
      <div></div>
    )
  }

  const staged = props.participants.filter(participant => participant.onStage);
  const participants = staged.map(participant => {
    return <Participant
      key = {participant.id}
      name={participant.name}
      avatar={participant.avatar}
      inSession={participant.inSession}
      onStage={participant.onStage}
      />
  });
  
  return (
    <div className="stage">
      {participants}
    </div>
  )
}