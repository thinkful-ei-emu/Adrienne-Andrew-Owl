import React from 'react';
import Participant from './Participant';

function ParticipantList(props) {
  const participants = props.participants.map(participant => {
    return <Participant
      name={participant.name}
      avatar={participant.avatar}
      inSession={participant.inSession}
      onStage={participant.onStage}
      />
  });

    return (
    <div>
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