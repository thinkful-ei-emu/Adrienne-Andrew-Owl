import React from 'react';
import Participant from './Participant';

export default function Stage(props) {
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
    <div class="stage">
      {participants}
    </div>
  )
}