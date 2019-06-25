import React from 'react';

class Participant extends React.Component {
  render() {
    return (
      <div className='participant'>
        <img src={this.props.avatar} alt='Avatar Here but no Avatar, sucks'></img>
        <p>{this.props.name}</p>
        <p>{this.props.inSession ? 'In session' : 'Offline'}</p>
        <p>{this.props.onStage ? 'On Stage' : 'In Session'}</p>
      </div>
    )
  }
}

export default Participant;