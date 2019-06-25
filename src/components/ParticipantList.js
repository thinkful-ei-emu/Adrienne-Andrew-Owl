import React from 'react';
import Participant from './Participant';
import '../styles/ParticipantList.css';
import { isProperty } from '@babel/types';

function ParticipantList(props) {

  if (!props.participants) {
    return (
      <div></div>
    )
  }

  const online = props.participants.filter(participant => participant.inSession);
  const participants = online.map(participant => {
    return <Participant
      key={participant.id}
      name={participant.name}
      avatar={participant.avatar}
      inSession={participant.inSession}
      onStage={participant.onStage}
      />
  });

    return (
    <div className='participantList'>
      {participants}
    </div>
  )
}

// class ParticipantList extends React.Component {

//   render() {
//     const participants = this.props.participants.map(participant => {
//       return <Participant
//         name={participant.name}
//         avatar={participant.avatar}
//         inSession={participant.inSession}
//         onStage={participant.onStage}
//         />
//     });

//       return (
//       <div>
//         {participants}
//       </div>
//     )
//   }
// }

export default ParticipantList;