import React from 'react';

function Participant(props) {

  return (
    <div className='participant'>
      <img src={props.avatar} alt='Avatar Here but no Avatar, sucks'></img>
      <p>{props.name}</p>
      <p>{props.inSession ? '' : 'Offline'}</p>
      <p>{props.onStage ? 'On Stage' : 'In Session'}</p>
    </div>
  )
}

// class Participant extends React.Component {
//   render() {
//     const props = this.props;
//     return (
//       <div className='participant'>
//         <img src={props.avatar} alt='Avatar Here but no Avatar, sucks'></img>
//         <p>{props.name}</p>
//         <p>{props.inSession ? 'In session' : 'Offline'}</p>
//         <p>{props.onStage ? 'On Stage' : 'In Session'}</p>
//       </div>
//     )
//   }
// }

export default Participant;